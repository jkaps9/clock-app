export default function Clock({ timeData, error, loading }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>
        {new Date(timeData.datetime).toLocaleTimeString([], {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })}{" "}
        {timeData.abbreviation}
      </p>
      <p></p>
    </div>
  );
}

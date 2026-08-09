export default function Clock({ timeData, error, loading }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Your IP-Based Time Info</h3>
      <p>
        <strong>Current Time:</strong>
        {new Date(timeData.datetime).toLocaleString()}
      </p>
      <p>
        <strong>Timezone:</strong> {timeData.timezone}
      </p>
      <p>
        <strong>Unix Time:</strong> {timeData.unixtime}
      </p>
      <p>
        <strong>abbreviation:</strong> {timeData.abbreviation}
      </p>
      <p>
        <strong>DST:</strong> {timeData.dst ? "true" : "false"}
      </p>
      <p>
        <strong>DST Offset:</strong> {timeData.dst_offset}
      </p>
      <p>
        <strong>IP:</strong> {timeData.client_ip}
      </p>
    </div>
  );
}

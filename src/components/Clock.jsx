import { useEffect, useState } from "react";

export default function Clock() {
  const [timeData, setTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://time.now/developer/api/ip")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTimeData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading local time...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Your IP-Based Time Info</h3>
      <p>
        <strong>Current Time:</strong>{" "}
        {new Date(timeData.datetime).toLocaleString()}
      </p>
      <p>
        <strong>Timezone:</strong> {timeData.timezone}
      </p>
      <p>
        <strong>UTC Offset:</strong> {timeData.utc_offset}
      </p>
    </div>
  );
}

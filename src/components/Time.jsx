import styles from "./Time.module.css";

export default function Clock({ timeData, error, loading }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p className={styles.timeText}>
        {new Date(timeData.datetime).toLocaleTimeString([], {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })}
        <span className={styles.timeZoneText}>{timeData.abbreviation}</span>
      </p>
    </div>
  );
}

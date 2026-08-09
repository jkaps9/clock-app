import styles from "./Location.module.css";
export default function Location({ locationData, error, loading }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <p className={styles.locationText}>
        In {locationData.cityName}, {locationData.regionName}
      </p>
    </>
  );
}

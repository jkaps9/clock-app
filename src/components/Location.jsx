import { useLocationUrl } from "../hooks/useLocationUrl";

export default function Location() {
  const { locationData, error, loading } = useLocationUrl();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <p>
        {locationData.cityName}, {locationData.regionName}
      </p>
    </>
  );
}

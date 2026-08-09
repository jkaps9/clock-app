import { useEffect, useState } from "react";

export default function Location() {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://free.freeipapi.com/api/json/")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        setLocationData(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <p>
        {locationData.cityName}, {locationData.countryName}
      </p>
    </>
  );
}

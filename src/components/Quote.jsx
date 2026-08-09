import { useEffect, useState } from "react";

export default function Quote() {
  const [quoteData, setQuoteData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        if (response.status >= 400) {
          console.log("SERVER ERRRORRRR");
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        setQuoteData(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <p>{quoteData.content}</p>
      <p>{quoteData.author}</p>
    </>
  );
}

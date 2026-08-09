import { useState, useEffect } from "react";

const useQuoteURL = () => {
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

  return { quoteData, error, loading };
};

export { useQuoteURL };

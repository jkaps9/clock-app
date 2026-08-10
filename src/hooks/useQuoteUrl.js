import { useState, useEffect, useCallback } from "react";

const useQuoteURL = () => {
  // loading starts as true, so we don't need to set it to true again on mount
  const [quoteData, setQuoteData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = useCallback(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        if (response.status >= 400) {
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

  const refreshQuote = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchQuote();
  }, [fetchQuote]);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  // 4. Export refreshQuote for the button
  return { quoteData, error, loading, refreshQuote };
};

export { useQuoteURL };

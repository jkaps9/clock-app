import { useQuoteURL } from "../hooks/useQuoteUrl";

export default function Quote() {
  const { quoteData, error, loading } = useQuoteURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <p>{quoteData.content}</p>
      <p>{quoteData.author}</p>
    </>
  );
}

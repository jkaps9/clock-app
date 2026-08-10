import { useQuoteURL } from "../hooks/useQuoteUrl";
import styles from "./Quote.module.css";

export default function Quote() {
  const { quoteData, error, loading, refreshQuote } = useQuoteURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.quoteContainer}>
      <div>
        <p className={styles.quoteContent}>{quoteData.content}</p>
        <p className={styles.quoteAuthor}>{quoteData.author}</p>
      </div>
      <button onClick={refreshQuote}>
        <span className="sr-only">Refresh</span>
      </button>
    </div>
  );
}

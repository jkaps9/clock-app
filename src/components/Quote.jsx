import { useQuoteURL } from "../hooks/useQuoteUrl";
import styles from "./Quote.module.css";

export default function Quote() {
  const { quoteData, error, loading } = useQuoteURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.quoteContainer}>
      <p className={styles.quoteContent}>{quoteData.content}</p>
      <p className={styles.quoteAuthor}>{quoteData.author}</p>
    </div>
  );
}

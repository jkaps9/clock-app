import { useState } from "react";
import { useTimeUrl } from "./hooks/useTimeUrl";
import { useLocationUrl } from "./hooks/useLocationUrl";
import { useQuoteURL } from "./hooks/useQuoteUrl";

import Button from "./components/Button";
import Time from "./components/Time";
import Location from "./components/Location";
import Quote from "./components/Quote";
import Details from "./components/Details";
import Greeting from "./components/Greeting";
import BackgroundImage from "./components/BackgroundImage";
import RefreshIcon from "./assets/icons/icon-refresh.svg";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import styles from "./App.module.css";

export default function App() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const { timeData, error, loading } = useTimeUrl();
  const {
    locationData,
    error: locationError,
    loading: locationLoading,
  } = useLocationUrl();

  const { quoteData, quoteError, quoteLoading, refreshQuote } = useQuoteURL();

  return (
    <>
      <BackgroundImage timeHour={11}></BackgroundImage>
      <main className={styles.main}>
        <section id="quote" className={styles.quoteSection}>
          {!isDetailsVisible && (
            <>
              <ErrorBoundary fallback={<p>Something went wrong</p>}>
                <Quote
                  quoteData={quoteData}
                  loading={quoteLoading}
                  error={quoteError}
                ></Quote>
                <button
                  onClick={refreshQuote}
                  className={styles.refreshButton}
                  aria-label="Refresh quote"
                >
                  <img src={RefreshIcon} alt="" aria-hidden="true" />
                </button>
              </ErrorBoundary>
            </>
          )}
        </section>
        <section id="main-content" className={styles.mainContent}>
          <div className={styles.timeData}>
            <Greeting timeHour={11}></Greeting>
            <Time timeData={timeData} error={error} loading={loading}></Time>
            <Location
              locationData={locationData}
              error={locationError}
              loading={locationLoading}
            ></Location>
          </div>
          <Button
            isExpanded={isDetailsVisible}
            setIsExpanded={() => setIsDetailsVisible((prev) => !prev)}
          ></Button>
        </section>
        <section id="details">
          {isDetailsVisible && (
            <Details
              timeData={timeData}
              error={error}
              loading={loading}
            ></Details>
          )}
        </section>
      </main>
    </>
  );
}

import { useState } from "react";
import { useTimeUrl } from "./hooks/useTimeUrl";
import { useLocationUrl } from "./hooks/useLocationUrl";

import Button from "./components/Button";
import Time from "./components/Time";
import Location from "./components/Location";
import Quote from "./components/Quote";
import Details from "./components/Details";
import Greeting from "./components/Greeting";
import styles from "./App.module.css";

export default function App() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const { timeData, error, loading } = useTimeUrl();
  const {
    locationData,
    error: locationError,
    loading: locationLoading,
  } = useLocationUrl();

  return (
    <main className={styles.main}>
      <section id="quote">{!isDetailsVisible && <Quote></Quote>}</section>
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
        {isDetailsVisible && <Details timeData={timeData}></Details>}
      </section>
    </main>
  );
}

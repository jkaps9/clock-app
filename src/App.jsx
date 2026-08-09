import { useState } from "react";
import { useTimeUrl } from "./hooks/useTimeUrl";
import { useLocationUrl } from "./hooks/useLocationUrl";

import Button from "./components/Button";
import Time from "./components/Time";
import Location from "./components/Location";
import Quote from "./components/Quote";
import Details from "./components/Details";
import Greeting from "./components/Greeting";

export default function App() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const { timeData, error, loading } = useTimeUrl();
  const {
    locationData,
    error: locationError,
    loading: locationLoading,
  } = useLocationUrl();

  return (
    <>
      {!isDetailsVisible && <Quote></Quote>}
      <Greeting timeHour={11}></Greeting>
      <Time timeData={timeData} error={error} loading={loading}></Time>
      <Location
        locationData={locationData}
        error={locationError}
        loading={locationLoading}
      ></Location>
      <Button
        isExpanded={isDetailsVisible}
        setIsExpanded={() => setIsDetailsVisible((prev) => !prev)}
      ></Button>
      {!isDetailsVisible && <Details timeData={timeData}></Details>}
    </>
  );
}

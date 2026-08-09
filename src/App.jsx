import { useState } from "react";
import { useTimeUrl } from "./hooks/useTimeUrl";

import Button from "./components/Button";
import Time from "./components/Time";
import Location from "./components/Location";
import Quote from "./components/Quote";
import Details from "./components/Details";
import Greeting from "./components/Greeting";

export default function App() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const { timeData, error, loading } = useTimeUrl();

  return (
    <>
      {!isDetailsVisible && <Quote></Quote>}
      <Greeting timeHour={11}></Greeting>
      <Time timeData={timeData} error={error} loading={loading}></Time>
      <Location></Location>
      <Button
        isExpanded={isDetailsVisible}
        setIsExpanded={() => setIsDetailsVisible((prev) => !prev)}
      ></Button>
      {!isDetailsVisible && <Details></Details>}
    </>
  );
}

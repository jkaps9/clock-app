import SunIcon from "../assets/icons/icon-sun.svg";
import MoonIcon from "../assets/icons/icon-moon.svg";
import styles from "./Greeting.module.css";

export default function Greeting({ timeHour }) {
  return (
    <div className={styles.greetingRow}>
      <img src={timeHour < 17 ? SunIcon : MoonIcon} alt="" aria-hidden="true" />
      <p>
        {timeHour < 12
          ? "Good morning"
          : timeHour < 17
            ? "Good afternoon"
            : "Good evening"}
        <span className={styles.expandedGreeting}>, it's currently</span>
      </p>
    </div>
  );
}

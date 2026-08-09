import SunIcon from "../assets/icons/icon-sun.svg";
import MoonIcon from "../assets/icons/icon-moon.svg";

export default function Greeting({ timeHour }) {
  return (
    <div>
      <img src={timeHour < 6 ? SunIcon : MoonIcon} alt="" aria-hidden="true" />
      <p>
        {timeHour < 12
          ? "Good morning"
          : timeHour < 5
            ? "Good afternoon"
            : "Good evening"}
        <span className="big-screens">, it's currently</span>
      </p>
    </div>
  );
}

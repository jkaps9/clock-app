import styles from "./Button.module.css";
import MoreIcon from "../assets/icons/icon-arrow-down.svg";
import LessIcon from "../assets/icons/icon-arrow-up.svg";

export default function Button({ isExpanded, setIsExpanded }) {
  return (
    <button className={styles.btn} type="button" onClick={setIsExpanded}>
      {isExpanded ? (
        <>
          <span>Less</span>
          <div className={styles.iconCircle}>
            <img src={LessIcon} alt="" aria-hidden="true" />
          </div>
        </>
      ) : (
        <>
          <span>More</span>
          <div className={styles.iconCircle}>
            <img src={MoreIcon} alt="" aria-hidden="true" />
          </div>
        </>
      )}
    </button>
  );
}

import styles from "./Details.module.css";

export default function Details({ timeData }) {
  return (
    <div className={styles.detailsContainer}>
      <ul className={styles.detailsList}>
        <li className={styles.detailsListItem}>
          <p className={styles.detailsItemLabel}>Current timezone</p>
          <p className={styles.detailsItemValue}>
            {timeData.timezone.replace("_", " ")}
          </p>
        </li>
        <li className={styles.detailsListItem}>
          <p className={styles.detailsItemLabel}>Day of the year</p>
          <p className={styles.detailsItemValue}>{timeData.day_of_year}</p>
        </li>
      </ul>
      <div className={styles.divider}></div>
      <ul className={styles.detailsList}>
        <li className={styles.detailsListItem}>
          <p className={styles.detailsItemLabel}>Day of the week</p>
          <p className={styles.detailsItemValue}>{timeData.day_of_week + 1}</p>
        </li>
        <li className={styles.detailsListItem}>
          <p className={styles.detailsItemLabel}>Week number</p>
          <p className={styles.detailsItemValue}>{timeData.week_number}</p>
        </li>
      </ul>
    </div>
  );
}

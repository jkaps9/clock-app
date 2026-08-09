import styles from "./Button.module.css";

export default function Button({ type, onClick = null, children }) {
  return (
    <button
      className={styles.btn}
      type={type}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
}

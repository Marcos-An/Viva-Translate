import styles from "./button.module.scss";
export function Button({ children, rest }) {
  return (
    <a
      href="https://app.vivatranslate.com/welcome"
      target="_blank"
      rel="noreferrer"
    >
      <button {...rest} className={styles.button}>
        <div className={styles.buttonBody}>{children}</div>
      </button>
    </a>
  );
}

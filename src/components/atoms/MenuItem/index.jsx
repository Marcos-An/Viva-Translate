import styles from "./menuItem.module.scss";

export function MenuItem({ label, link }) {
  return (
    <a href={link}>
      <li className={styles.menuItem}>{label}</li>
    </a>
  );
}

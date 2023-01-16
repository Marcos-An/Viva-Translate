import styles from "./avatar.module.scss";

export function Avatar({ url }) {
  return <img src={url} alt="avatar" className={styles.avatar} />;
}

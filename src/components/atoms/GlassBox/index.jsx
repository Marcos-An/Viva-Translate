import styles from "./glassBox.module.scss";

export function GlassBox({ children, ...rest }) {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
}

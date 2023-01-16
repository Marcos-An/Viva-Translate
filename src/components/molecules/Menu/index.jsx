import styles from "./menu.module.scss";
import { MenuItem } from "../../atoms/MenuItem";

export function Menu({ data }) {
  return (
    <ul className={styles.menu}>
      {data.map(({ label, link }) => (
        <MenuItem key={label} label={label} link={link} />
      ))}
    </ul>
  );
}

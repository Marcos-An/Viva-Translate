import { MENU_ITEMS } from "../../../utils/datasProvider";
import { Button } from "../../atoms/Button";
import { Menu } from "../Menu";
import styles from "./header.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <img src="/assets/viva.png" alt="logo" />
      <Menu data={MENU_ITEMS} />
      <Button>Contato de vendas</Button>
    </div>
  );
}

import styles from "./cardHowDoesItWorks.module.scss";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import Tilt from "react-parallax-tilt";

export function CardHowDoesItWorks({ title, number, content, icon }) {
  const { width } = useWindowDimensions();

  return (
    <Tilt
      tiltReverse={true}
      tiltEnable={width && width < 1024 ? false : true}
      scale={1.03}
    >
      <div className={styles.colorfulContainer}>
        <div className={styles.whiteContainer}>
          <div className={styles.circle}>{number}</div>
          <img src={`/assets/${icon}.svg`} alt="icon" />
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </Tilt>
  );
}

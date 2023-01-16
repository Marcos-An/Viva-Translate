import styles from "./howDoesItWorkSection.module.scss";
import { Parallax } from "react-scroll-parallax";
import { ColorfulDivider } from "../../atoms/ColorfulDivider";
import { CardHowDoesItWorks } from "../../atoms/CardHowDoesItWorks";
import { STEP_CARD_DATA } from "../../../utils/datasProvider";

export function HowDoesItWork() {
  return (
    <div id="howDoesItWorks">
      <Parallax speed={20} className={styles.container}>
        <h1>How Does It Works?</h1>
        <ColorfulDivider />

        <p className={styles.subtitle}>
          Viva Translate allows you to translate Google Meets calls in real
          time. All your meeting notes are automatically saved in one place.
        </p>

        <div className={styles.cardsWrapper}>
          {STEP_CARD_DATA.map((data) => (
            <Parallax translateY={[80, -10]} key={data.number}>
              <CardHowDoesItWorks
                number={data.number}
                title={data.title}
                content={data.content}
                icon={data.icon}
              />
            </Parallax>
          ))}
        </div>
      </Parallax>
    </div>
  );
}

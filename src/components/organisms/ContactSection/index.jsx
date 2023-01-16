import { Avatar } from "../../atoms/Avatar";
import { ColorfulDivider } from "../../atoms/ColorfulDivider";
import { Button } from "../../atoms/Button";
import { GlassBox } from "../../atoms/GlassBox";
import styles from "./contactSection.module.scss";
import { CONTACT_COMMENTS } from "../../../utils/datasProvider";
import { Parallax } from "react-scroll-parallax";

export function ContactSection() {
  return (
    <div className={styles.container} id="contact">
      <h1>
        This is how our customers use Viva to drive their businesses forward
      </h1>
      <ColorfulDivider />

      <div className={styles.cardsWrapper}>
        {CONTACT_COMMENTS.map((contact) => (
          <Parallax translateY={[50, -10]} key={contact.name}>
            <GlassBox>
              <div className={styles.personInfosWrapper}>
                <Avatar url={contact.url} />
                <div>
                  <h3>{contact.name}</h3>
                  <p>{contact.role}</p>
                </div>
              </div>
              <p className={styles.commentContent}>{contact.comment}</p>
            </GlassBox>
          </Parallax>
        ))}
      </div>
      <Parallax translateY={[50, -100]}>
        <div className={styles.tryViva}>
          <h1>Try Viva to transform your video calls with Live Translation</h1>

          <Button>Try Viva on Google Meets - it's free</Button>
        </div>
      </Parallax>
    </div>
  );
}

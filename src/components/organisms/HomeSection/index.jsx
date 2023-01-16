import styles from "./homeSection.module.scss";
import { Button } from "../../atoms/Button";
import { GlassBox } from "../../atoms/GlassBox";
import { Avatar } from "../../atoms/Avatar";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import { CONTACT_COMMENTS } from "../../../utils/datasProvider";
import Typewriter from "typewriter-effect";

export function HomeSection() {
  const [index] = useState(() =>
    Math.floor(Math.random() * CONTACT_COMMENTS.length)
  );

  return (
    <div className={styles.container} id="home">
      <div className={styles.contentWrapper}>
        <Parallax speed={10}>
          <div className={styles.content}>
            <h1>
              <Typewriter
                options={{
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Transform your video calls with <span> Live Translation</span>"
                    )
                    .start();
                }}
              />
            </h1>
            <p>
              Viva Translate helps people around the world communicate in
              English, Spanish and Portuguese in real time. Save time on meeting
              notes and translations with Viva.
            </p>
            <Button>Try Viva on Google Meets - it's free</Button>
          </div>
        </Parallax>
        <Parallax speed={-10}>
          <img
            className={styles.mainImage}
            src="/assets/text-translate-example.png"
            alt="text-translate-example "
          />
        </Parallax>
      </div>

      <div className={styles.bottom}>
        <div className={styles.availableOn}>
          <Parallax translateY={[-15, 0]}>
            <p>Available on:</p>
            <div className={styles.logosWrapper}>
              <img src="/assets/google-meet-logo.png" alt="google-meet-logo" />
              <img src="/assets/zoom-logo.png" alt="zoom-logo" />
            </div>
          </Parallax>
        </div>
        <img src="/assets/arrow.png" alt="arrow" className={styles.arrow} />
        <div className={styles.glassBox}>
          <GlassBox>
            <div className={styles.personInfosWrapper}>
              <Avatar url={CONTACT_COMMENTS[index].url} />
              <div>
                <h3>{CONTACT_COMMENTS[index].name}</h3>
                <p>{CONTACT_COMMENTS[index].role}</p>
              </div>
            </div>
            <p className={styles.commentContent}>
              {CONTACT_COMMENTS[index].comment}
            </p>
          </GlassBox>
        </div>
      </div>
    </div>
  );
}

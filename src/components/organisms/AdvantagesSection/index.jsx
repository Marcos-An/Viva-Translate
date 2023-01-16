import styles from "./advantages.module.scss";
import { ColorfulDivider } from "../../atoms/ColorfulDivider";
import { Parallax } from "react-scroll-parallax";

export function AdvantagesSections() {
  return (
    <div className={styles.container} id="advantages">
      <div className={styles.contentWrapper}>
        <Parallax translateY={[-30, 50]}>
          <div>
            <h1>
              Keep everyone aligned and up to date with real-time captioning
            </h1>
            <ColorfulDivider />
            <p>
              AI-translated subtitles can greatly enhance communication during
              video calls by providing real-time translations for people who
              speak different languages. This allows for a more inclusive and
              efficient conversation as everyone can understand and participate
              in the discussion
            </p>
          </div>
        </Parallax>
        <img src="/assets/example1.png" alt="example1" />
      </div>
      <div className={styles.contentWrapper}>
        <img src="/assets/example2.png" alt="example2" />
        <Parallax translateY={[-40, 70]}>
          <div>
            <h1>Finish your meetings faster and automate workflows</h1>
            <ColorfulDivider />
            <p>
              With automatically generated meeting summaries and transcripts,
              you can save valuable time by quickly reviewing and summarizing
              key points discussed during a meeting. This can help you stay on
              top of important information and make more informed decisions
            </p>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

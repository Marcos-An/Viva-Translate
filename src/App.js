import styles from "./app.module.scss";
import { Header } from "./components/molecules/Header";
import { AdvantagesSections } from "./components/organisms/AdvantagesSection";
import { ContactSection } from "./components/organisms/ContactSection";
import { HomeSection } from "./components/organisms/HomeSection";
import { HowDoesItWork } from "./components/organisms/HowDoesItWorkSection";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HomeSection />
      <HowDoesItWork />
      <AdvantagesSections />
      <ContactSection />
    </div>
  );
}

export default App;

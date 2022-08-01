import dynamic from "next/dynamic";
import { AboutSection } from "./AboutSection/AboutSection";
import ContactSection from "./ContactSection/ContactSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import HeadSection from "./HeadSection/HeadSection";
import styles from "./PageHome.module.scss";
import SkillsSection from "./SkillsSection/SkillsSection";

const Topbar = dynamic(() => import("../../Layout/TopBar/TopBar"), {
  ssr: false,
});

export const PageHome = () => {
  return (
    <div className={styles["PageHome"]}>
      <Topbar />
      <HeadSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default PageHome;

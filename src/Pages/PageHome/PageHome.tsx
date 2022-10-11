import dynamic from "next/dynamic";
import Head from "next/head";
import { AboutSection } from "./AboutSection/AboutSection";
import ContactSection from "./ContactSection/ContactSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import HeadSection from "./HeadSection/HeadSection";
import styles from "./PageHome.module.scss";
import SkillsSection from "./SkillsSection/SkillsSection";
// import UXUISection from "./UXUISection/UXUISection";

const Topbar = dynamic(() => import("../../Layout/TopBar/TopBar"), {
  ssr: false,
});

export const PageHome = () => {
  return (
    <div className={styles["PageHome"]}>
      <Head>
        <title>Anthony Jeamme - Développeur React</title>
        <meta
          name="description"
          content="Je vous aide à concevoir des applications Next.js performantes, maintenables et centrées sur l'utilisateur."
        />
        <link rel="canonical" href="https://ajeamme.dev" />
        <meta property="og:url" content="https://ajeamme.dev" />
        <meta
          property="og:title"
          content="Anthony Jeamme - Développeur React"
        />
        <meta
          property="og:description"
          content="Je vous aide à concevoir des applications Next.js performantes, maintenables et centrées sur l'utilisateur."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ajeamme.dev/images/profile-picture.jpg"
        />
      </Head>
      <Topbar />
      <HeadSection />
      <SkillsSection />
      {/* <UXUISection /> */}
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default PageHome;

/* Keywords

- Nextjs
- React
- test
- performance

 */

import {
  Desktop,
  DownloadSimple,
  FilePdf,
  Globe,
  GraduationCap,
  Heart,
  HouseLine,
} from "phosphor-react";
import HomeContainer from "../common/HomeContainer/HomeContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import styles from "./AboutSection.module.scss";

export const AboutSection = () => {
  return (
    <div className={styles["AboutSection"]}>
      <HomeContainer text>
        <SectionTitle blueLine>À propos</SectionTitle>

        <ul>
          <li>
            <span className={styles["icon"]}>
              <HouseLine weight="duotone" />
            </span>{" "}
            Saint-Étienne
          </li>

          <li>
            <span className={styles["icon"]}>
              <GraduationCap weight="duotone" />
            </span>{" "}
            Master 2 informatique - spécialité web intelligence
          </li>

          <li>
            <span className={styles["icon"]}>
              <Globe weight="duotone" />
            </span>{" "}
            Anglais, Espagnol, Portugais et débutant en chinois
          </li>

          <li>
            <span className={styles["icon"]}>
              <Desktop weight="duotone" />
            </span>{" "}
            Développeur depuis {new Date().getFullYear() - 2014} ans,
            indépendant depuis {new Date().getFullYear() - 2018} ans
          </li>
          <li>
            <span className={styles["icon"]}>
              <Heart weight="duotone" />
            </span>{" "}
            Passions : langues, guitare, piano, lecture (non fiction), arts
            martiaux
          </li>
        </ul>

        <button className={styles["download-cv"]}>
          <FilePdf />
          <span>
            Télécharger
            <br />
            mon CV
          </span>
        </button>
      </HomeContainer>
    </div>
  );
};

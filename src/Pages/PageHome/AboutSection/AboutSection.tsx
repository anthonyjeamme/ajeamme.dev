import {
  Desktop,
  FilePdf,
  Globe,
  GraduationCap,
  Heart,
  HouseLine,
  User,
} from "phosphor-react";
import { ExternalLink } from "../../../utils/ExternalLink/ExternalLink";
import HomeContainer from "../common/HomeContainer/HomeContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import styles from "./AboutSection.module.scss";

export const AboutSection = () => {
  return (
    <div className={styles["AboutSection"]} id="qui-suis-je">
      <HomeContainer text>
        <SectionTitle blueLine>Qui suis-je ?</SectionTitle>

        <ul>
          <li>
            <span className={styles["icon"]}>
              <User weight="duotone" />
            </span>{" "}
            {getAge()}
            ans, freelance
          </li>
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
              <Desktop weight="duotone" />
            </span>{" "}
            Développeur depuis {new Date().getFullYear() - 2014} ans,
            indépendant depuis {new Date().getFullYear() - 2018} ans
          </li>

          <li>
            <span className={styles["icon"]}>
              <Globe weight="duotone" />
            </span>{" "}
            Anglais, Espagnol, Portugais et débutant en chinois
          </li>

          <li>
            <span className={styles["icon"]}>
              <Heart weight="duotone" />
            </span>{" "}
            <div>
              Passions : langues, guitare, piano, lecture (non fiction), arts
              martiaux, échecs
            </div>
          </li>
        </ul>

        <a href="/CV - Anthony JEAMME.pdf" download>
          <button className={styles["download-cv"]}>
            <FilePdf />
            <span>
              Télécharger
              <br />
              mon CV
            </span>
          </button>
        </a>
      </HomeContainer>
    </div>
  );
};

const getAge = () => {
  const today = new Date();

  const birthYear = 1989;
  const birthMonth = 8;

  return (
    today.getFullYear() -
    birthYear +
    (today.getMonth() > birthMonth - 1 ? 0 : -1)
  );
};

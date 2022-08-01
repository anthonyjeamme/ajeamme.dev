import { Gauge, PaintBrush, Wall } from "phosphor-react";
import React from "react";
import HomeContainer from "../common/HomeContainer/HomeContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";

// Icons
import NextJSIcon from "../../../components/Icons/NextJSIcon";

import styles from "./SkillsSection.module.scss";
import ReactIcon from "../../../components/Icons/ReactIcon";
import SASSIcon from "../../../components/Icons/SASSIcon";
import AWSLambdaIcon from "../../../components/Icons/AWSLambdaIcon";
import NetlifyIcon from "../../../components/Icons/NetlifyIcon";
import MongoDBIcon from "../../../components/Icons/MongoDBIcon";

export const SkillsSection = () => {
  return (
    <div className={styles["SkillsSection"]} id="competence">
      <HomeContainer large>
        <SectionTitle>Compétences</SectionTitle>

        <div className={styles["columns"]}>
          <Skills />
          <Arguments />
        </div>
      </HomeContainer>
    </div>
  );
};

export default SkillsSection;

const Skills = () => (
  <div>
    <h3>Stack</h3>

    <div className={styles["stack"]}>
      <div className={styles["item"]}>
        <ReactIcon />
        <div>React.js</div>
      </div>
      <div className={styles["item"]}>
        <NextJSIcon />
        <div>Next.js</div>
      </div>
      <div className={styles["item"]}>
        <SASSIcon />
        <div>SASS</div>
      </div>

      <div className={styles["item"]}>
        <AWSLambdaIcon />
        <div>Functions</div>
      </div>
      <div className={styles["item"]}>
        <NetlifyIcon />
        <div>Netlify</div>
      </div>
      <div className={styles["item"]}>
        <MongoDBIcon />
        <div>MongoDB</div>
      </div>
    </div>

    <h3>Backend et base de données</h3>
    <p>Node.js (Express) - MongoDB - PostgreSQL</p>

    <h3>Tests et supervision</h3>
    <p>Cypress - Jest - Sentry</p>

    <h3>Services</h3>
    <p>Harusa - Analytics - Stripe</p>

    <h3>Autres</h3>
    <p>UX/UI design - Adobe illustrator - Copywriting</p>
  </div>
);

const Arguments = () => (
  <div className={styles["arguments"]}>
    <div className={styles["argument"]}>
      <header>
        <div className={styles["icon"]}>
          <span>
            <PaintBrush weight="duotone" />
          </span>
        </div>
        <div className={styles["label"]}>Intégration</div>
      </header>

      <p>
        Je vous aide à intégrer vos maquettes, au pixel près, responsive et à
        perfectionner au besoin : micro contenu, micro interaction, typographie
        etc.
      </p>
    </div>

    <div className={styles["argument"]}>
      <header>
        <div
          className={styles["icon"]}
          style={{
            backgroundColor: "#328864",
          }}
        >
          <span>
            <Wall weight="duotone" />
          </span>
        </div>
        <div className={styles["label"]}>Code fonctionnel et maintenable</div>
      </header>
      <p>
        Afin de préserver un code efficace, je travail essentiellement en 4
        étapes : conception, développement, tests et refactorisation.
      </p>
    </div>

    <div className={styles["argument"]}>
      <header>
        <div
          className={styles["icon"]}
          style={{
            backgroundColor: `#d35731`,
          }}
        >
          <span>
            <Gauge weight="duotone" />
          </span>
        </div>
        <div className={styles["label"]}>
          Application optimisée performances / SEO
        </div>
      </header>
      <p>
        Je met un point d'honneur à assurer de bonnes performances /
        accessibilité / bonnes pratiques SEO :<br />
        Un site optimisé = plus de visiteurs et plus d'utilisateurs satisfaits.
      </p>
    </div>
  </div>
);

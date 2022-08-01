import { Gauge, PaintBrush, Wall } from "phosphor-react";
import React from "react";
import HomeContainer from "../common/HomeContainer/HomeContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";

import styles from "./SkillsSection.module.scss";

export const SkillsSection = () => {
  return (
    <div className={styles["SkillsSection"]} id="competence">
      <HomeContainer text>
        <SectionTitle>Domaine de compétence</SectionTitle>

        <p>
          Stack principale : React / Next.js / SCSS / AWS functions / Netlify
        </p>
        <p>Testing & logging tools : Cypress / Jest / Sentry</p>
        <p>Base de données : MongoDB / PostgreSQL</p>

        <p>Autres : UX/UI design - Adobe illustrator - Copywriting</p>

        {/* <p>
          <strong>React</strong> sur <strong>Next.js</strong> et{" "}
          <strong>SCSS</strong> sont mes technologies de prédilection depuis
          maintenant plus de 3ans.
        </p>

        <p>
          Les services que j'utilise régulièrement : <strong>Netlify</strong>,{" "}
          <strong>Google Analytics</strong>, <strong>Sentry</strong>,{" "}
          <strong>Stripe</strong>, <strong>Storybook</strong>.
        </p>

        <p>
          Je suis familier avec l'<strong>UI/UX</strong> car ayant travaillé en
          étroite colaboration avec des graphistes et étant moi même passioné
          par ces sujets.
        </p>

        <p>
          Je suis également familier avec l'optimisation <strong>SEO</strong>.
        </p>

        <p>
          Je suis apte à intervenir sur du code frontend en{" "}
          <strong>NodeJS</strong>
        </p>

        <p>
          J'aime le code propre, <strong>testé</strong>,{" "}
          <strong>responsive</strong> et finement optimisé niveau UX.
        </p> */}

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
              Je vous aide à intégrer vos maquettes, au pixel près, responsive
              et à les perfectionner si besoin : micro contenu, micro
              interaction, typographie etc.
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
              <div className={styles["label"]}>
                Code fonctionnel et maintenable
              </div>
            </header>
            <p>
              Afin de préserver un code efficace, je travail essentiellement en
              4 étapes : conception, développement, tests et refactorisation.
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
              Un site performant = plus de visiteurs et plus de visiteurs
              satisfaits.
            </p>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
};

export default SkillsSection;

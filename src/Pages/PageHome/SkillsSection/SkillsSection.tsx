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

        <div className={styles["stack"]}>
          <div className={styles["item"]}>
            <img src="/images/stack/React.svg" />
          </div>
          <div className={styles["item"]}>
            <img src="/images/stack/Next.js.svg" />
          </div>
          <div className={styles["item"]}>
            <img src="/images/stack/Netlify.svg" />
          </div>
          <div className={styles["item"]}>
            <img src="/images/stack/Node.js.svg" />
          </div>
          <div className={styles["item"]}>
            <img src="/images/stack/PostgreSQL.svg" />
          </div>
          <div className={styles["item"]}>
            <img src="/images/stack/MongoDB.svg" />
          </div>
        </div>

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

        <SectionTitle>Domaine de compétence</SectionTitle>

        <div className={styles["arguments"]}>
          <div className={styles["argument"]}>
            <header>
              <div className={styles["icon"]}>
                <PaintBrush weight="duotone" />
              </div>
              <div className={styles["label"]}>Intégration au pixel</div>
            </header>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              aliquam est deleniti veniam, dolorum architecto eveniet
              accusantium atque? Libero, nam minima! Assumenda?
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
                <Wall weight="duotone" />
              </div>
              <div className={styles["label"]}>
                Code fonctionnel et maintenable
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              dignissimos commodi similique fuga harum assumenda reiciendis.
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
                <Gauge weight="duotone" />
              </div>
              <div className={styles["label"]}>
                Application optimisée performances / SEO
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              dignissimos commodi similique fuga harum assumenda reiciendis. Sit
              aliquam est deleniti veniam, dolorum architecto eveniet
              accusantium atque? Libero, nam minima! Assumenda?
            </p>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
};

export default SkillsSection;

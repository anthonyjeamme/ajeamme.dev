import React from "react";
import HomeContainer from "../common/HomeContainer/HomeContainer";

import styles from "./SkillsSection.module.scss";

export const SkillsSection = () => {
  return (
    <div className={styles["SkillsSection"]}>
      <HomeContainer>
        <h2>Domaine de compétence</h2>

        <p>
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
        </p>
      </HomeContainer>
    </div>
  );
};

export default SkillsSection;

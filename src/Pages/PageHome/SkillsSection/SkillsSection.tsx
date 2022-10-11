import {
  Airplane,
  Gauge,
  LightbulbFilament,
  PaintBrush,
  Wall,
} from "phosphor-react";
import React from "react";
import HomeContainer from "../common/HomeContainer/HomeContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";

// Icons
import NextJSIcon from "../../../components/Icons/NextJSIcon";

import ReactIcon from "../../../components/Icons/ReactIcon";
import SASSIcon from "../../../components/Icons/SASSIcon";
import AWSLambdaIcon from "../../../components/Icons/AWSLambdaIcon";
import NetlifyIcon from "../../../components/Icons/NetlifyIcon";
import MongoDBIcon from "../../../components/Icons/MongoDBIcon";

import { classNameModule } from "../../../utils/classNameModule/classNameModule";
import styles from "./SkillsSection.module.scss";
const className = classNameModule(styles);

export const SkillsSection = () => {
  return (
    <div {...className("SkillsSection")} id="competence">
      <div {...className("illustration")}>
        <LightbulbFilament />
      </div>

      <HomeContainer large>
        <SectionTitle>Compétences</SectionTitle>

        <div {...className("columns")}>
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

    <div {...className("stack")}>
      <div {...className("item")}>
        <ReactIcon />
        <div>React.js</div>
      </div>
      <div {...className("item")}>
        <NextJSIcon />
        <div>Next.js</div>
      </div>
      <div {...className("item")}>
        <SASSIcon />
        <div>SASS</div>
      </div>

      <div {...className("item")}>
        <AWSLambdaIcon />
        <div>Functions</div>
      </div>
      <div {...className("item")}>
        <NetlifyIcon />
        <div>Netlify</div>
      </div>
      <div {...className("item")}>
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
  <div {...className("arguments")}>
    <div {...className("argument")}>
      <header>
        <div {...className("icon")}>
          <span>
            <PaintBrush weight="duotone" />
          </span>
        </div>
        <div {...className("label")}>Intégration</div>
      </header>

      <p>
        Je vous aide à intégrer vos maquettes, au pixel près, responsive et à
        perfectionner au besoin : micro contenu, micro interaction, typographie
        etc.
      </p>
    </div>

    <div {...className("argument")}>
      <header>
        <div
          {...className("icon")}
          style={{
            backgroundColor: "#328864",
          }}
        >
          <span>
            <Wall weight="duotone" />
          </span>
        </div>
        <div {...className("label")}>Code fonctionnel et maintenable</div>
      </header>
      <p>
        Afin de préserver un code efficace, je travail essentiellement en 4
        étapes : conception, développement, tests et refactorisation.
      </p>
    </div>

    <div {...className("argument")}>
      <header>
        <div
          {...className("icon")}
          style={{
            backgroundColor: `#d35731`,
          }}
        >
          <span>
            <Gauge weight="duotone" />
          </span>
        </div>
        <div {...className("label")}>
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

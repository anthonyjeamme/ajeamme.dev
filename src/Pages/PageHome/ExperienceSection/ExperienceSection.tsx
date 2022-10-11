import {
  Calendar,
  ChartBar,
  Link,
  Presentation,
  User,
  UserCircle,
  Users,
} from "phosphor-react";
import React from "react";
import { classNameModule } from "../../../utils/classNameModule/classNameModule";
import { ExternalLink } from "../../../utils/ExternalLink/ExternalLink";
import HomeContainer from "../common/HomeContainer/HomeContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";
import ExperienceCarousel from "./ExperienceCarousel/ExperienceCarousel";

import styles from "./ExperienceSection.module.scss";
import { Gallery } from "./Gallery/Gallery";

const className = classNameModule(styles);

export const ExperienceSection = () => {
  return (
    <div className={styles["ExperienceSection"]} id="experience">
      <HomeContainer large>
        <SectionTitle>Expérience principale : coq-trotteur</SectionTitle>

        <div className={styles["text"]}>
          <div>
            <div className={styles["stack"]}>
              <span className={styles["item"]}>Nx</span>{" "}
              <span className={styles["item"]}>Next.js</span>{" "}
              <span className={styles["item"]}>Node</span>{" "}
              <span className={styles["item"]}>MongoDB</span>{" "}
              <span className={styles["item"]}>Stripe</span>{" "}
              <span className={styles["item"]}>Analytics</span>{" "}
              <span className={styles["item"]}>Netlify</span>
            </div>

            <div {...className("key-informations")}>
              <div>
                <div {...className("icon")}>
                  <UserCircle weight="duotone" />
                </div>
                <div>
                  Rôle: <strong>Lead dev</strong> (Choix technologiques,
                  conception, développement, management, UX)
                </div>
              </div>

              <div>
                <div {...className("icon")}>
                  <Users weight="duotone" />
                </div>
                <div>
                  Équipe: <strong> 5 développeurs</strong>
                </div>
              </div>

              <div>
                <div {...className("icon")}>
                  <Calendar weight="duotone" />
                </div>
                <div>Depuis Janvier 2019</div>
              </div>

              <div>
                <div {...className("icon")}>
                  <ChartBar weight="duotone" />
                </div>
                <div>100 plateformes, 3000+ visiteurs par jours</div>
              </div>

              <div>
                <div {...className("icon")}>
                  <Presentation weight="duotone" />
                </div>
                <div>
                  Système d'articles, stories, avis, réservation de
                  produit/services
                </div>
              </div>
            </div>

            <ExternalLink href="https://partir-ici.fr">
              <button {...className("visit-button")}>
                <Link />
                <div>Visiter</div>
              </button>
            </ExternalLink>

            {/* <p>
                <strong>Lead-dev</strong> chez coq-trotteur pendant{" "}
                <strong>plus de 3 ans</strong>, j'ai participé à l'élaboration
                de l'écosystème (choix technologiques, conception,
                développement, management, UI/UX) :
              </p>

              <ul>
                <li>
                  Plateformes (marketplace) pour plus de 100 clients,
                  personnalisables via un dashboard.
                </li>
                <li>
                  Système de vente de produits et de services (Mercanet /
                  Stripe)
                </li>
                <li>
                  Un système de création de site WYSIWYG pour les acteurs
                  locaux.
                </li>
                <li>
                  Un système de contenu (stories, articles) écris par les
                  plateformes et leurs influenceurs.
                </li>
              </ul>

              <a
                href="https://coq-trotteur.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["link"]}
              >
                <button>
                  <Link />
                  Plus d'informations
                </button>
              </a> */}
          </div>
        </div>
      </HomeContainer>
      <ExperienceCarousel />
    </div>
  );
};

export default ExperienceSection;

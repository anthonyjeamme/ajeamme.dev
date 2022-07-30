import Image from "next/image";
import { Link } from "phosphor-react";
import React from "react";
import HomeContainer from "../common/HomeContainer/HomeContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";

import styles from "./ExperienceSection.module.scss";

export const ExperienceSection = () => {
  return (
    <div className={styles["ExperienceSection"]} id="experience">
      <HomeContainer>
        <SectionTitle>Expérience principale : coq-trotteur</SectionTitle>
      </HomeContainer>

      <div className={styles["columns"]}>
        <div className={styles["text"]}>
          <div>
            <div className={styles["stack"]}>
              Stack : <span className={styles["item"]}>Nx</span> /{" "}
              <span className={styles["item"]}>Next.js</span> /{" "}
              <span className={styles["item"]}>Node</span> /{" "}
              <span className={styles["item"]}>MongoDB</span> /{" "}
              <span className={styles["item"]}>Stripe</span> /{" "}
              <span className={styles["item"]}>Analytics</span>
            </div>

            <p>
              <strong>Lead-dev</strong> chez coq-trotteur pendant{" "}
              <strong>plus de 3 ans</strong>, j'ai participé à l'élaboration de
              l'écosystème (choix technologiques, conception, développement,
              management, UI/UX) :
            </p>

            <ul>
              <li>
                Plateformes pour plus de 100 clients, personnalisables via un
                dashboard.
              </li>
              <li>
                Un système de création de site WYSIWYG pour les acteurs locaux.
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
            </a>
          </div>
        </div>

        <div>
          <div className={styles["picture-container"]}>
            <div className={styles["fake-picture"]}>
              <Image
                quality={100}
                objectFit="cover"
                src="/images/coq-trotteur-preview.jpg"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

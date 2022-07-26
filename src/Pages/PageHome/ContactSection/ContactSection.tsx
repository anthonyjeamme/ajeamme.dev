import {
  ChatCircleDots,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import React from "react";
import { ExternalLink } from "../../../utils/ExternalLink/ExternalLink";
import HomeContainer from "../common/HomeContainer/HomeContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";

import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <section className={styles["ContactSection"]} id="contact">
      <HomeContainer>
        <div className={styles["columns"]}>
          <div>
            <SectionTitle>Retrouvez moi sur...</SectionTitle>
            <div className={styles["links"]}>
              <ExternalLink href="https://www.linkedin.com/in/anthonyjeamme/">
                <LinkedinLogo />
              </ExternalLink>
              <ExternalLink href="https://twitter.com/ajeamme">
                <TwitterLogo />
              </ExternalLink>
              <ExternalLink href="/">
                <YoutubeLogo />
              </ExternalLink>
            </div>
          </div>

          <div>
            <h2>Besoin d'aide ?</h2>
            <ExternalLink href="https://www.linkedin.com/in/anthonyjeamme/">
              <button className={styles["cta"]}>
                <ChatCircleDots /> Discutons de votre projet !
              </button>
            </ExternalLink>
          </div>
        </div>
      </HomeContainer>
    </section>
  );
};

export default ContactSection;

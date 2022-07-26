import {
  ChatCircleDots,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import React from "react";
import { ExternalLink } from "../../../utils/ExternalLink/ExternalLink";
import HomeContainer from "../common/HomeContainer/HomeContainer";

import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <section className={styles["ContactSection"]}>
      <HomeContainer>
        <div className={styles["columns"]}>
          <div>
            <h2>Retrouvez moi sur...</h2>
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

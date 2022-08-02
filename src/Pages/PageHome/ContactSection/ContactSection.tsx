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
    <section className={styles["ContactSection"]} id="contact">
      <HomeContainer>
        <div className={styles["columns"]}>
          <div>
            <div className={styles["legal"]}>
              Anthony Jeamme
              <br />
              Entrepreneur Individuel
              <br />
              20 quai pierre scize - 69000 LYON, FRANCE
              <br />
              Siret: 83166072500035
            </div>
          </div>

          <div>
            <ExternalLink href="https://www.linkedin.com/in/anthonyjeamme/">
              <button className={styles["cta"]}>
                <ChatCircleDots /> Discutons de votre projet !
              </button>
            </ExternalLink>

            <div className={styles["links"]}>
              <ExternalLink href="https://www.linkedin.com/in/anthonyjeamme/">
                <LinkedinLogo alt="LinkedIn" />
              </ExternalLink>
              <ExternalLink href="https://twitter.com/ajeamme">
                <TwitterLogo alt="Twitter" />
              </ExternalLink>
              {/* <ExternalLink href="/">
                <YoutubeLogo alt="Youtube" />
              </ExternalLink> */}
            </div>
          </div>
        </div>
      </HomeContainer>
    </section>
  );
};

export default ContactSection;

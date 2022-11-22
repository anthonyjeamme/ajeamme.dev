import dynamic from "next/dynamic";
import { Briefcase, LinkedinLogo } from "phosphor-react";
import React from "react";
import { ExternalLink } from "../../../utils/ExternalLink/ExternalLink";

import styles from "./HeadSection.module.scss";
const ProfileImage = dynamic(() => import("./ProfileImage/ProfileImage"), {
  ssr: false,
});

export const HeadSection = () => {
  return (
    <section className={styles["HeadSection"]}>
      <div className={styles["container"]}>
        <div className={styles["columns"]}>
          <div className={styles["profile-picture"]}>
            <ProfileImage />
          </div>

          <div className={styles["text"]}>
            <h1>
              <i>Anthony jeamme</i>
              <br /> développeur <b>React</b>
            </h1>
            <div className={styles["subheadline"]}>
              Je vous aide à concevoir des applications{" "}
              <strong className={styles["red"]}>Next.js</strong> performantes,
              maintenables et centrées sur l'utilisateur.
            </div>

            <CTALine />
          </div>
        </div>
      </div>
    </section>
  );
};

const CTALine = () => (
  <div className={styles["CTALine"]}>
    <a href="#experience">
      <button className={styles["cta"]}>
        <span>
          <Briefcase />
          <span>Mon travail</span>
        </span>
      </button>
    </a>
  </div>
);

export default HeadSection;

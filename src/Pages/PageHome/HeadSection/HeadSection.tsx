import React from "react";

import styles from "./HeadSection.module.scss";

export const HeadSection = () => {
  return (
    <section className={styles["HeadSection"]}>
      <div className={styles["container"]}>
        <div className={styles["columns"]}>
          <div className={styles["profile-picture"]}>
            <img src="/images/profile-picture.jpg" alt="Anthony Jeamme" />
          </div>

          <div className={styles["text"]}>
            <h1>
              <i>Anthony jeamme</i>,<br /> développeur React
            </h1>
            <div className={styles["subheadline"]}>
              Je vous aide à concevoir des applications{" "}
              <strong className={styles["red"]}>Next.js</strong> performantes,
              maintenables et centrées sur l'utilisateur.
            </div>

            <button className={styles["cta"]}>
              <span>En savoir +</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;

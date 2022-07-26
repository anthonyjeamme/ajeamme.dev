import React from "react";
import HomeContainer from "../common/HomeContainer/HomeContainer";

import styles from "./ExperienceSection.module.scss";

export const ExperienceSection = () => {
  return (
    <div className={styles["ExperienceSection"]}>
      <HomeContainer>
        <h2>Expérience</h2>
      </HomeContainer>
    </div>
  );
};

export default ExperienceSection;

import React from "react";
import HomeContainer from "../common/HomeContainer/HomeContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";

import styles from "./ExperienceSection.module.scss";

export const ExperienceSection = () => {
  return (
    <div className={styles["ExperienceSection"]} id="experience">
      <HomeContainer>
        <SectionTitle>Expérience</SectionTitle>
      </HomeContainer>
    </div>
  );
};

export default ExperienceSection;

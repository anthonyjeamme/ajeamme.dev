import React from "react";
import HomeContainer from "../common/HomeContainer/HomeContainer";

import styles from "./BlogSection.module.scss";

export const BlogSection = () => {
  return (
    <div className={styles["BlogSection"]}>
      <HomeContainer>
        <h2>J'écris</h2>
      </HomeContainer>
    </div>
  );
};

export default BlogSection;

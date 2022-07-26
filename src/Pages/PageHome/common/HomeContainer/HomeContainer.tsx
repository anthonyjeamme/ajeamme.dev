import React, { ReactNode } from "react";

import styles from "./HomeContainer.module.scss";

export const HomeContainer: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className={styles["HomeContainer"]}>{children}</div>;
};

export default HomeContainer;

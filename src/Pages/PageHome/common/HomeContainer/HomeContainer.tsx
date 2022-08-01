import React, { ReactNode } from "react";
import { classNameModule } from "../../../../utils/classNameModule/classNameModule";

import styles from "./HomeContainer.module.scss";

const className = classNameModule(styles);

export const HomeContainer: React.FC<{
  children: ReactNode;
  text?: boolean;
}> = ({ text = false, children }) => {
  return <div {...className("HomeContainer", { text })}>{children}</div>;
};

export default HomeContainer;

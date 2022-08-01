import React, { ReactNode } from "react";
import { classNameModule } from "../../../../utils/classNameModule/classNameModule";

import styles from "./HomeContainer.module.scss";

const className = classNameModule(styles);

export const HomeContainer: React.FC<{
  children: ReactNode;
  text?: boolean;
  large?: boolean;
}> = ({ text = false, large = false, children }) => {
  return <div {...className("HomeContainer", { text, large })}>{children}</div>;
};

export default HomeContainer;

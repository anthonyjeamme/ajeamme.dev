import React, { ReactNode } from "react";
import { classNameModule } from "../../../../utils/classNameModule/classNameModule";

import styles from "./SectionTitle.module.scss";

const className = classNameModule(styles);

export const SectionTitle: React.FC<{
  children: ReactNode;
  blueLine?: boolean;
}> = ({ blueLine = false, children }) => {
  return (
    <h2
      {...className("SectionTitle", {
        blueLine,
      })}
    >
      <span>
        <span>{children}</span>
      </span>
    </h2>
  );
};

export default SectionTitle;

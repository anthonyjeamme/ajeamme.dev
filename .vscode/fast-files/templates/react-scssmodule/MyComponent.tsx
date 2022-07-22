import React from "react";

import styles from "./MyComponent.module.scss";

export const MyComponent = () => {
  return <div className={styles["MyComponent"]}>MyComponent</div>;
};

export default MyComponent;

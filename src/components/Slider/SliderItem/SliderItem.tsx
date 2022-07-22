import React from "react";

import styles from "./SliderItem.module.scss";

export const SliderItem = ({ item, focus }: any) => (
  <div className={styles["SliderItem"]} data-type="item">
    <div
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      {item.id}
    </div>
  </div>
);

export default SliderItem;

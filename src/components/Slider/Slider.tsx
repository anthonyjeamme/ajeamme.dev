import React from "react";

import { useSlider } from "./Slider.hook";
import SliderItem from "./SliderItem/SliderItem";
import { ControlButton } from "./ControlButton/ControlButton";
import { classNameModule } from "../../utils/classNameModule/classNameModule";

import styles from "./Slider.module.scss";
const className = classNameModule(styles);

export const Slider = ({ items }: { items: any[] }) => {
  const slider = useSlider({ items });

  return (
    <div {...className("Slider")}>
      <div {...className("control")}>
        <ControlButton
          direction="left"
          disabled={slider.currentIndex === 0}
          handleClick={slider.handleScrollLeft}
        />

        <ControlButton
          direction="right"
          disabled={slider.currentIndex === items.length - 1}
          handleClick={slider.handleScrollRight}
        />
      </div>

      <div {...className("scroller")} ref={slider.scrollerRef}>
        <div>
          {items.map((item, index) => (
            <SliderItem
              key={item.id}
              item={item}
              focus={slider.currentIndex === index}
            />
          ))}

          <div {...className("filler")}>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

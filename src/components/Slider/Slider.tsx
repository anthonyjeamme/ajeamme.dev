import { CaretLeft, CaretRight } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";

import styles from "./Slider.module.scss";
import SliderItem from "./SliderItem/SliderItem";

export const Slider = ({ items }: { items: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollerRef.current) return;

    const elements = Array.from<HTMLDivElement>(
      scrollerRef.current.querySelectorAll(`[data-type="item"]`)
    );

    elements[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const getScrollOffset = () => {
    if (window.innerWidth < 250 * 3) return 1;
    if (window.innerWidth < 250 * 4) return 2;

    return 3;
  };

  const handleScroll = () => {
    if (!scrollerRef.current) return;

    const elements = Array.from<HTMLDivElement>(
      scrollerRef.current.querySelectorAll(`[data-type="item"]`)
    );

    const leftLine = Math.max(0, (window.innerWidth - 1000) / 2);

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      if (element.getBoundingClientRect().left >= leftLine) {
        setCurrentIndex(i);
        return;
      }
    }
  };

  useEffect(() => {
    if (!scrollerRef.current) return;
    scrollerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      if (!scrollerRef.current) return;
      scrollerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles["Slider"]}>
      <div className={styles["control"]}>
        <button
          className={currentIndex === 0 ? styles["disabled"] : ""}
          onClick={() => {
            const index = Math.max(0, currentIndex - getScrollOffset());
            scrollToIndex(index);
          }}
        >
          <CaretLeft weight="bold" />
        </button>

        <button
          className={
            currentIndex === items.length - 1 ? styles["disabled"] : ""
          }
          onClick={() => {
            const index = Math.min(
              currentIndex + getScrollOffset(),
              items.length - 1
            );
            scrollToIndex(index);
          }}
        >
          <CaretRight weight="bold" />
        </button>
      </div>

      <div className={styles["scroller"]} ref={scrollerRef}>
        <div>
          {items.map((item, index) => (
            <SliderItem
              key={item.id}
              item={item}
              focus={currentIndex === index}
            />
          ))}

          <div className={styles["filler"]}>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

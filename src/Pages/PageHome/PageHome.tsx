import { ArrowLeft, ArrowRight, CaretLeft, CaretRight } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import styles from "./PageHome.module.scss";

export const PageHome = () => {
  const items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ];

  return (
    <div className={styles["PageHome"]}>
      <section>
        <div>
          <div className={styles["container"]}>
            <h1>Test !</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eos
              molestias est, exercitationem quo corrupti ea eveniet nostrum ut
              nulla ducimus. Recusandae corrupti unde voluptate adipisci ad est
              illo numquam.
            </p>
          </div>

          <Slider items={items} />
        </div>
      </section>
    </div>
  );
};

export default PageHome;

const Slider = ({ items }: { items: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollerRef.current) return;

    const elements = Array.from<HTMLDivElement>(
      scrollerRef.current.querySelectorAll(`.${styles["SliderItem"]}`)
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
      scrollerRef.current.querySelectorAll(`.${styles["SliderItem"]}`)
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

const SliderItem = ({ item, focus }: any) => (
  <div className={styles["SliderItem"]}>
    <div
      style={{
        backgroundImage: "",
      }}
    >
      {item.id}
    </div>
  </div>
);

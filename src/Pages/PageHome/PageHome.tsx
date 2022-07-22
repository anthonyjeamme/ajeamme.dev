import { ArrowLeft, ArrowRight, CaretLeft, CaretRight } from "phosphor-react";
import { useRef, useState } from "react";
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

    console.log("Scroll to ", index);

    const elements = Array.from<HTMLDivElement>(
      scrollerRef.current.querySelectorAll(`.${styles["SliderItem"]}`)
    );

    elements[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const scrollOffset = 3;

  return (
    <div className={styles["Slider"]}>
      <div className={styles["control"]}>
        <button
          onClick={() => {
            const index = Math.max(0, currentIndex - scrollOffset);
            setCurrentIndex(index);
            scrollToIndex(index);
          }}
        >
          <CaretLeft weight="bold" />
        </button>

        <button
          onClick={() => {
            const index = Math.min(
              currentIndex + scrollOffset,
              items.length - 1
            );
            setCurrentIndex(index);
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

          <div>
            <div style={{ width: "100vw" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SliderItem = ({ item, focus }: any) => (
  <div
    className={`${styles["SliderItem"]}${focus ? ` ${styles["focus"]}` : ""}`}
  >
    <div
      style={{
        backgroundImage: "",
      }}
    >
      {item.id}
    </div>
  </div>
);

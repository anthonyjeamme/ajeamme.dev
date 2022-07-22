import { ArrowLeft, ArrowRight, CaretLeft, CaretRight } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import Slider from "../../components/Slider/Slider";
import styles from "./PageHome.module.scss";

export const PageHome = () => {
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1647537560785-55fc3c3cc8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 0,
    },
    {
      image:
        "https://images.unsplash.com/photo-1646887269928-2d090e13b431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1542877854-e112e8bedcb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      id: 2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      id: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1496060169243-453fde45943b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80",
      id: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1647537560785-55fc3c3cc8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 10,
    },
    {
      image:
        "https://images.unsplash.com/photo-1646887269928-2d090e13b431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 11,
    },
    {
      image:
        "https://images.unsplash.com/photo-1542877854-e112e8bedcb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      id: 12,
    },
    {
      image:
        "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      id: 13,
    },
    {
      image:
        "https://images.unsplash.com/photo-1496060169243-453fde45943b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80",
      id: 14,
    },
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
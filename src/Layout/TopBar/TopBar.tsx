import Image from "next/image";
import { useEffect, useRef } from "react";
import { classNameModule } from "../../utils/classNameModule/classNameModule";
import { BurgerButton } from "../BurgerButton/BurgerButton";

import styles from "./TopBar.module.scss";

const className = classNameModule(styles);

export const Topbar = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!rootRef.current) return;

      const opacity = Math.min(1, window.scrollY / 500);

      rootRef.current.style.backgroundColor = `rgba(93, 107, 187, ${opacity})`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMobile = () => window.innerWidth < 768;

  return (
    <div ref={rootRef} {...className("Topbar")}>
      <div>
        <img
          src="/images/logo.svg"
          className={styles["logo"]}
          height={40}
          width={40}
          alt="Anthony JEAMME logo"
        />
      </div>

      <div>
        {isMobile() ? (
          <BurgerButton />
        ) : (
          <nav>
            <a href="#competence">Compétences</a>
            <a href="#experience">Expérience</a>
            <a href="#contact">Contact</a>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Topbar;

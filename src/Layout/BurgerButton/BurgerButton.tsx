import { useState } from "react";
import { classNameModule } from "../../utils/classNameModule/classNameModule";
import styles from "./BurgerButton.module.scss";

const className = classNameModule(styles);

export const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        {...className("BurgerButton", { isOpen })}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className={styles["bar1"]} />
        <div className={styles["bar2"]} />
      </button>

      {isOpen && (
        <div {...className("modal")}>
          <header></header>
          <nav>
            <a href="#competence">Compétences</a>
            <a href="#experience">Expérience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
};

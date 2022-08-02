import { EnvelopeSimpleOpen } from "phosphor-react";
import { useState } from "react";
import { classNameModule } from "../../utils/classNameModule/classNameModule";
import styles from "./BurgerButton.module.scss";

const className = classNameModule(styles);

export const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(true);

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
          <div className={styles["overlay"]} />

          <div className={styles["content"]}>
            <header></header>
            <nav>
              <a
                href="#competence"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Compétences
              </a>
              <a
                href="#experience"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Expérience
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Contact
              </a>
            </nav>
            <footer>
              <button>
                <EnvelopeSimpleOpen />

                <span>Contactez-moi</span>
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

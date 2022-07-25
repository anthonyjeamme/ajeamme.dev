import { forwardRef } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { classNameModule } from "../../../utils/classNameModule/classNameModule";

import styles from "./ControlButton.module.scss";

const className = classNameModule(styles);

interface TControlButtonProps {
  handleClick: () => void;
  disabled: boolean;
  direction: "left" | "right";
}

export const ControlButton = forwardRef<HTMLButtonElement, TControlButtonProps>(
  ({ handleClick, disabled, direction }, ref) => (
    <button
      ref={ref}
      {...className("ControlButton", {
        disabled,
      })}
      onClick={handleClick}
    >
      {direction === "left" ? (
        <CaretLeft weight="bold" />
      ) : (
        <CaretRight weight="bold" />
      )}
    </button>
  )
);

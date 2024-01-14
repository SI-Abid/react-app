import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-primary"]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

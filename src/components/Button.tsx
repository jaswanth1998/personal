import { FunctionComponent, type CSSProperties } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  oneCharTitle?: string;
  icon?: boolean;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  oneCharTitle = "Get In Touch",
  icon = false,
  propMinWidth,
}) => {
  return (
    <Button className={[styles.button, className].join(" ")} type="primary" />
  );
};

export default Button;

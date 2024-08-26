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

const ButtonPrimary: FunctionComponent<ButtonType> = ({
  className = "",
  oneCharTitle = "Get In Touch",
  icon = false,
  propMinWidth,
}) => {
  return (
    <Button
      className={`${styles.buttonPrimary} ${className}`}
      style={{ minWidth: propMinWidth ,backgroundColor: '#2c3e50',border: 'none'}}
      type="primary"
      shape="round"
      size="large"
      icon={icon ? "arrow-right" : undefined}
    >
      {oneCharTitle}
    </Button>
  );
};

export default ButtonPrimary;

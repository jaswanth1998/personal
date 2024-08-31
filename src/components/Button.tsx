import { FunctionComponent } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  icon?: boolean;
  title?: string;
};

const ButtonPrimary: FunctionComponent<ButtonType> = ({
  className = "",
  icon = false,
  title = "Button Title",
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

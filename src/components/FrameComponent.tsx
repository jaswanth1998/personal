import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  cook?: string;
  iconParkOutlinecook?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  cook,
  iconParkOutlinecook,
}) => {
  return (
    <div className={[styles.cookParent, className].join(" ")}>
      <h2 className={styles.cook}>{cook}</h2>
      <img
        className={styles.iconParkOutlinecook}
        loading="lazy"
        alt=""
        src={iconParkOutlinecook}
      />
      <div className={styles.viewIt}>{`View It >>`}</div>
    </div>
  );
};

export default FrameComponent;

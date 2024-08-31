import { FunctionComponent } from "react";
import styles from "./Field.module.css";

export type FieldType = {
  className?: string;
};

const Field: FunctionComponent<FieldType> = ({ className = "" }) => {
  return (
    <div className={[styles.field, className].join(" ")}>
      <div className={styles.placeholderText}>
        Please provide details about your project, questions, or any specific
        requests.
      </div>
      <div className={styles.bottom}>
        <div className={styles.wordCount}>0 / 100</div>
        <img
          className={styles.resizerIcon}
          loading="lazy"
          alt=""
          src="/resizer.svg"
        />
      </div>
    </div>
  );
};

export default Field;

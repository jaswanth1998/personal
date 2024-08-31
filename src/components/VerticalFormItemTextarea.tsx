import { FunctionComponent } from "react";
import Field from "./Field";
import styles from "./VerticalFormItemTextarea.module.css";

export type VerticalFormItemTextareaType = {
  className?: string;
};

const VerticalFormItemTextarea: FunctionComponent<
  VerticalFormItemTextareaType
> = ({ className = "" }) => {
  return (
    <div className={[styles.verticalFormItemtextarea, className].join(" ")}>
      <div className={styles.label}>
        <div className={styles.title}>Your Message:</div>
      </div>
      <Field />
    </div>
  );
};

export default VerticalFormItemTextarea;

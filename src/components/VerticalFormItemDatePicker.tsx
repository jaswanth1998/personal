import { FunctionComponent } from "react";
import DatePicker from "./DatePicker";
import styles from "./VerticalFormItemDatePicker.module.css";

export type VerticalFormItemDatePickerType = {
  className?: string;
};

const VerticalFormItemDatePicker: FunctionComponent<
  VerticalFormItemDatePickerType
> = ({ className = "" }) => {
  return (
    <div className={[styles.verticalFormItemdatePicker, className].join(" ")}>
      <div className={styles.label}>
        <div className={styles.title}>Preferred Appointment Date:</div>
      </div>
      <DatePicker />
    </div>
  );
};

export default VerticalFormItemDatePicker;

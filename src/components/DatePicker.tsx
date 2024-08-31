import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { DatePicker as AntdDatePicker } from "antd";
import styles from "./DatePicker.module.css";

export type DatePickerType = {
  className?: string;
};

const DatePicker: FunctionComponent<DatePickerType> = ({ className = "" }) => {
  return (
    <AntdDatePicker
      className={[styles.datePicker, className].join(" ")}
      name="date"
      id="date"
      placeholder="Select date"
      allowClear={true}
      bordered={false}
    />
  );
};

export default DatePicker;

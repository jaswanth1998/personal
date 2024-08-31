import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Input1.module.css";

export type Input1Type = {
  className?: string;
  suffix?: boolean;
  addonBefore?: boolean;
  value?: string;
  addonAfter?: boolean;
  prefix?: boolean;
};

const Input1: FunctionComponent<Input1Type> = ({
  className = "",
  suffix = false,
  addonBefore = false,
  value = "Email",
  addonAfter = false,
  prefix = false,
}) => {
  return (
    <Input
      className={[styles.input, className].join(" ")}
      name="name"
      id="name"
      size="middle"
      allowClear={true}
      type="text"
      bordered={true}
      prefix={<UserOutlined />}
    />
  );
};

export default Input1;

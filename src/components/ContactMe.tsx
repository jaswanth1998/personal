import { FunctionComponent } from "react";
import Input1 from "../components/Input1";
import VerticalFormItemDatePicker from "../components/VerticalFormItemDatePicker";
import VerticalFormItemTextarea from "../components/VerticalFormItemTextarea";
import Button from "../components/Button";
import styles from "./ContactMe.module.css";

const ContactMe: FunctionComponent = () => {
  return (
    <div className={styles.contactMe}>
      <a className={styles.contactMe1}>Contact ME</a>
      <div className={styles.wrapperInput}>
        <div>
        <div className={styles.iWouldLoveContainer}>
          <p className={styles.iWouldLove}>
            I would love to hear from you! Whether you have an opportunity, a
            question,
          </p>
          <p className={styles.iWouldLove}>
            {" "}
            or just want to say hello, feel free to reach out.
          </p>
        </div >
        <section className={styles.inputParent}>
          <Input1 />
          <Input1 />
          <Input1 />
          <VerticalFormItemDatePicker />
          <VerticalFormItemTextarea />
          <div className={styles.buttonWrapper}>
            <Button icon={false} title="Button Title" />
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

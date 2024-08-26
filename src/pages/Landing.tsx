import { FunctionComponent } from "react";
import Button from "../components/Button";
import FrameComponent from "../components/FrameComponent";
import styles from "./Landing.module.css";

const Landing: FunctionComponent = () => {
  return (
    <div className={styles.landing}>
      <main className={styles.frameParent}>
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.buttonParent}>
            <Button />
            <Button />
          </div>
        </div>
        <div className={styles.hiIAmJaswanthViewMyProfiParent}>
          <h1 className={styles.hiIAmContainer}>
            <p className={styles.hi}>Hi</p>
            <p className={styles.hi}>I am Jaswanth</p>
            <p className={styles.hi}>{`View my profile `}</p>
          </h1>
          <div className={styles.frameGroup}>
            <div className={styles.instanceParent}>
              <FrameComponent
                cook="Developer"
                iconParkOutlinecook="/iconoirlaptopdevmode.svg"
              />
              <FrameComponent
                cook="Designer"
                iconParkOutlinecook="/materialsymbolslightbrushsharp.svg"
              />
            </div>
            <div className={styles.instanceParent}>
              <FrameComponent
                cook="Content creator"
                iconParkOutlinecook="/cieditpencilline01.svg"
              />
              <FrameComponent
                cook="SEO Expert"
                iconParkOutlinecook="/cilmagnifyingglass.svg"
              />
            </div>
            <div className={styles.instanceParent}>
              <FrameComponent
                cook="Event manager"
                iconParkOutlinecook="/materialsymbolseventoutline.svg"
              />
              <FrameComponent
                cook="Cook"
                iconParkOutlinecook="/iconparkoutlinecook.svg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;

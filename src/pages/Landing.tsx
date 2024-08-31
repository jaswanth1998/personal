import { FunctionComponent } from "react";
import ButtonPrimary from "../components/Button";
import FrameComponent from "../components/FrameComponent";
import styles from "./Landing.module.css";
import brush from '../Assests/Skills/brush.svg';
import cook from '../Assests/Skills/cook.svg';
import event from '../Assests/Skills/event.svg';
import laptop from '../Assests/Skills/laptop.svg';
import pencil from '../Assests/Skills/pencil.svg';
import magnifyingGlass from '../Assests/Skills/magnifying-glass.svg';

import profilePic from '../Assests/profilePic.png';
import Footer from "../components/Footer";
import VerticalFormItemTextarea from "../components/VerticalFormItemTextarea";
import ContactMe from "../components/ContactMe";

const Landing: FunctionComponent = () => {
  return (
    <>
    <div className={styles.landing}>
      <main className={styles.frameParent}>
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src={profilePic}
          />
          <div className={styles.buttonParent}>
            <ButtonPrimary title="Download CV" />
            <ButtonPrimary />
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
                iconParkOutlinecook={laptop}
              />
              <FrameComponent
                cook="Designer"
                iconParkOutlinecook={brush}
              />
            </div>
            <div className={styles.instanceParent}>
              <FrameComponent
                cook="Content creator"
                iconParkOutlinecook={pencil}
              />
              <FrameComponent
                cook="SEO Expert"
                iconParkOutlinecook={magnifyingGlass}
              />
            </div>
            {/* <div className={styles.instanceParent}>
              <FrameComponent
                cook="Event manager"
                iconParkOutlinecook="/materialsymbolseventoutline.svg"
              />
              <FrameComponent
                cook="Cook"
                iconParkOutlinecook="/iconparkoutlinecook.svg"
              />
            </div> */}
          </div>
        </div>
      </main>
      
    </div>
    <ContactMe />
    <Footer/>
    </>
  );
};

export default Landing;

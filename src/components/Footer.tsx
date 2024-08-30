import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.footerInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameChild} />
            <h1 className={styles.sriVeeraSatya}>
              Sri Veera Satya Durga Jaswanth tata
            </h1>
          </div>
          <div className={styles.myJourneyInto}>
            My journey into graphic design was inspired by a simple realization:
            the power of visual storytelling. While coding provided a logical
            structure, design offered a canvas for creativity. This blend of
            logic and creativity drives my passion for graphic design every day
          </div>
          <div className={styles.copyrightParent}>
            <img
              className={styles.copyrightIcon}
              loading="lazy"
              alt=""
              src="/copyright.svg"
            />
            <div className={styles.plaperallRightsReservedWrapper}>
              <div className={styles.plaperallRightsReserved}>
                2024 plaper.All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerChild}>
        <img className={styles.frameItem} alt="" src="/group-2.svg" />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.getInTouchWrapper}>
          <h1 className={styles.getInTouch}>Get In Touch</h1>
        </div>
        <div className={styles.contactDetails}>
          
          <div className={styles.frameDiv}>
            <div className={styles.mailParent}>
              <img
                className={styles.mailIcon}
                loading="lazy"
                alt=""
                src="/mail.svg"
              />
              <div className={styles.plaperallRightsReservedWrapper}>
                <div className={styles.frameParent1}>
                  <div className={styles.jaswanthtatagmailcomWrapper}>
                    <div className={styles.jaswanthtatagmailcom}>
                      jaswanthtata@gmail.com
                    </div>
                  </div>
                  <div className={styles.phoneParent}>
                    <img
                      className={styles.copyrightIcon}
                      loading="lazy"
                      alt=""
                      src="/phone.svg"
                    />
                    <div className={styles.plaperallRightsReservedWrapper}>
                      <div className={styles.loginLink}>+1(437)-533 4583</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.address}>
            <div className={styles.icoutlinePlaceWrapper}>
            <img
              className={styles.icoutlinePlaceIcon}
              loading="lazy"
              alt=""
              src="/icoutlineplace.svg"
            />
          </div>
              <div className={styles.plaperallRightsReserved}>
                #1,1279 south park street, B3J 2K8.
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div className={styles.phoneParent}>
                <img
                  className={styles.copyrightIcon}
                  loading="lazy"
                  alt=""
                  src="/mingcutelinkedinline.svg"
                />
                <img
                  className={styles.copyrightIcon}
                  loading="lazy"
                  alt=""
                  src="/instagram.svg"
                />
                <img
                  className={styles.copyrightIcon}
                  loading="lazy"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

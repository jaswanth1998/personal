import React, { useState, useEffect } from "react";

import styles from "./info.module.css";

import "aos/dist/aos.css";
import AOS from "aos";

const Info: React.FC = () => {
  const [showShortTerm, setShowShortTerm] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowShortTerm((prev) => !prev); // Toggle between true and false
    }, 2000); // Change goal every 2 seconds

    return () => clearInterval(interval); // Clean up the timer on component unmount
  }, []);

  return (
    <>
      <div className={styles.info}>
        <h1 className={styles.heading} data-aos="fade-up">
          Welcome to My Creative Space
        </h1>

        <p className={styles.bodyText} data-aos="fade-up">
          Hi, I'm Sri Veera Satya Durga Jaswanth Tata, a graphic designer who is
          deeply passionate about my craft. I possess a rare combination of
          technical skills and a natural creative instinct. Equipped with a
          solid grasp of coding, I am prepared to transform imaginative concepts
          into reality. With a strong desire to contribute to a vibrant team, I
          am dedicated to making a meaningful difference in the field of graphic
          design. Hailing from Canada, I bring a unique perspective to the
          table.
        </p>

        <h2 className={styles.heading} data-aos="fade-up">
          About Me
        </h2>

        <p className={styles.bodyText} data-aos="fade-up">
          I started my career in the tech world, amassing three years of coding
          experience. In 2023, I relocated to Canada to pursue a master's degree
          in internetworking. During my studies, I discovered a deep interest in
          content creation and graphic design, prompting a career shift towards
          the creative field.
        </p>
        <br />
        <br />
        <h1 className={styles.heading} data-aos="fade-up">
          Skills
        </h1>
        <div className={styles.skillsGrid} data-aos="fade-up">
          <div className={styles.skillCategory}>
            <h2>Technical Proficiency</h2>
            <p>
              3 years of coding experience with a solid understanding of
              software development.
            </p>
          </div>
          <div className={styles.skillCategory}>
            <h2>Graphic Design Tools</h2>
            <p>
              Expertise in video editing using Capture and creating
              illustrations with Affinity Designer.
            </p>
          </div>
          <div className={styles.skillCategory}>
            <h2>Adaptability</h2>
            <p>
              Quick to learn and adopt new tools and technologies, with a
              passion for continuous improvement.
            </p>
          </div>
          <div className={styles.skillCategory}>
            <h2>Copywriting</h2>
            <p>Skilled in creating content tailored to client requirements.</p>
          </div>
        </div>
        <br />
        <br />
        <div>
          <>
            <div>
              <h1 className={styles.subHeading}>Short-term Goal</h1>
              <p className={styles.bodyText}>
                Secure a role within a creative team where I can apply and hone
                my graphic design skills.
              </p>
            </div>
          </>
          <>
            <div>
              <h1 className={styles.subHeading}>Long-term Goal</h1>
              <p className={styles.bodyText}>
                Achieve recognition as a successful and innovative professional
                in the graphic design industry.
              </p>
            </div>
          </>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Info;

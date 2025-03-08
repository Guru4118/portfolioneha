import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import aboutImage from "./aboutImage.png";
import cursorIcon from "./cursorIcon.png";
import serverIcon from "./serverIcon.png";
import uilcon from "./uiIcon.png"
import heroImage from "../Hero/heroImage.png"; // Adjusted path


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <img src={aboutImage} alt="Me sitting with a laptop" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
              Full Stack Developer pursuing an MCA at VIT Vellore, with a strong foundation in web development. Achieved 3rd rank in BCA with a CGPA of 9.55, demonstrating academic excellence and technical proficiency. Passionate about building innovative digital solutions.              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Achievements</h3>
              <p>
               <ul>
                <li>Secured 3rd rank in Bachelor of Computer Applications (BCA) with a CGPA of 9.55.</li>
                
                <li>Awarded Merit Scholarship in all three years of the BCA program for
                academic excellence.</li>
               </ul>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={uilcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <p>
                
                <ul>
                <li>
                 <b>Python with Machine Learning</b>  – Training at Acmegrade
                  </li><li>
                 <b>Programming with Python </b> – Certified by Internshala
                  </li>
                </ul>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

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
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={cursorIcon} alt="Cursor icon" />
          <div className={styles.educationSection}>
  <h3 className="education-title">EDUCATION</h3>
 
  <br />

  <div className="education-item">
    <div className="education-details">
      <p className="degree"><strong>• Master Of Computer Applications (MCA)</strong></p>
      <p className="institute"><em>Vellore Institute of Technology, Vellore</em></p>
    </div>
    <div className="education-info">
      <p className="duration"><em>2023 – 2025</em></p>
      <p className="cgpa"><strong>CGPA:</strong> 9.35</p>
    </div>
  </div>
  <br />

  <div className="education-item">
    <div className="education-details">
      <p className="degree"><strong>• Bachelor Of Computer Applications (BCA)</strong></p>
      <p className="institute"><em>Vellore Institute of Technology, Vellore</em></p>
    </div>
    <div className="education-info">
      <p className="duration"><em>2020 – 2023</em></p>
      <p className="cgpa"><strong>CGPA:</strong> 9.55</p>
    </div>
  </div>
</div>





          </li>
          <li className={styles.aboutItem}>
          <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Achievements</h3>
              <p>
               
                <p><strong>•</strong> Secured 3rd rank in Bachelor of Computer Applications (BCA) with a CGPA of 9.55.</p>
                
                <p><strong>•</strong> Awarded Merit Scholarship in all three years of the BCA program for
                academic excellence.</p>
               
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={uilcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <p>
                
                
                 <p><b><strong>•</strong> Python with Machine Learning</b>  – Training at Acmegrade
                  </p><p>
                 <b><strong>•</strong> Programming with Python </b> – Certified by Internshala</p>
                  
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

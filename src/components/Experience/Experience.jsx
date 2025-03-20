import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

import flutterImg from "./react.png";
import springBootImg from "./node.png";
import djangoImg from "./dj.png";
import javaImg from "./java.png";
import pythonImg from "./py.png";
import sqlImg from "./sql.png";
import htmlImg from "./html.png";
import me from "./me.png";
import cssImg from "./css.png";

// Create a mapping for imported images
const skillImages = {
  "Flutter": flutterImg,
  "Spring Boot": springBootImg,
  "Django": djangoImg,
  "Java": javaImg,
  "Python": pythonImg,
  "Sql": sqlImg,
  "HTML": htmlImg,
  "CSS": cssImg
};




export const Experience = () => {
  return (
    
    <section className={styles.container} id="experience">
      
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                <img src={skillImages[skill.title]} alt={skill.title} /> </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        
        <ul className={styles.history}>
        <h2 className={styles.title}> EXPERIENCE</h2>

          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} | ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import email from "./emailIcon.png";
import linkedin from "./linkedinIcon.png";



export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="email" />
          <a href="mailto:grandheneha@email.com">grandheneha@email.com</a>
        </li>
        <li className={styles.link}>
          <img src= {linkedin} alt="linkedin logo" />
          <a target="new" href="https://www.linkedin.com/in/nehagrandhe/">Neha Grandhe</a>
        </li>
        
      </ul>
    </footer>
  );
};

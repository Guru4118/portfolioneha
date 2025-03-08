import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import heroImage from "./hero.jpg";



export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Neha</h1>
        <p className={styles.description}>
        Enthusiastic and detail-oriented Full Stack Developer with experience in building dynamic, scalable, and user-friendly web applications. Passionate about creating seamless digital experiences and optimizing performance for better usability.        </p>
        <a href="mailto:grandheneha@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
   

<img src={heroImage} className="rounded-full" alt="Hero image of me" className={styles.heroImg} />;

      


      

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

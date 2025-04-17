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
      Enthusiastic and detail-oriented Full Stack Developer with experience in building dynamic, scalable, and user-friendly web applications. Passionate about creating seamless digital experiences and optimizing performance for better usability.
    </p>

    {/* Buttons Wrapper */}
    <div style={{ display: 'flex', gap: '1rem' }}>
      <a href="mailto:grandheneha@email.com" className={styles.contactBtn}>
        Contact Me
      </a>
      <a target="new" href="https://drive.google.com/file/d/1BXKN3Ed1KUDLHF9Uryun8p3TdKv88ifl/view?usp=sharing" className={styles.contactBtn}>
        CV
      </a>
    </div>
    </div>

<img src={heroImage}alt="Hero image of me" className={ styles.heroImg} />;

      


      

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

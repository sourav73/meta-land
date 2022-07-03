import React from "react";
import styles from "./Intro.module.scss";
const Intro = () => {
  return (
    <section id="intro" className={styles.intro}>
      <p className="d-flex justify-content-center align-items-center">
        From the makers of <span className="ms-2">Apes vs mutants</span>
      </p>
      <p>Your avatars + your land = endless possibilities.</p>
    </section>
  );
};

export default Intro;

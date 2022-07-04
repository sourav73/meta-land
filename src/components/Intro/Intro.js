import React from "react";
import GradiantText from "../GradiantText/GradiantText";
import styles from "./Intro.module.scss";
const Intro = () => {
  return (
    <section id="intro" className={styles.intro}>
      <p className="d-flex justify-content-center align-items-center">
        <span className="me-2 pt-1">From the makers of</span>
        <GradiantText text="Apes vs mutants" />
      </p>
      <p>Your avatars + your land = endless possibilities.</p>
    </section>
  );
};

export default Intro;

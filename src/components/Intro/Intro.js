import React from "react";
import styles from "./Intro.module.scss";
const Intro = () => {
  return (
    <section id="intro" className={`${styles.intro} max-width`}>
      <div className="container-lg">
        {/* <p className="d-flex justify-content-center align-items-center">
          <span className="me-2 pt-1">From the makers of</span>
          <GradiantText text="Apes vs mutants" />
        </p> */}
        <p>Your land = endless possibilities.</p>
      </div>
    </section>
  );
};

export default Intro;

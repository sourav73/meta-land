import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Vision.module.scss";

const Vision = () => {
  return (
    <section id="vision" className={`${styles.vision} max-width text-center`}>
      <SectionHeading text="our vision" />
      <p>
        Each Arcade land is about belonging, an exclusive habitat for each NFT
        project. A new world where everyone can come together to create, play,
        and sometimes even defend.
      </p>
    </section>
  );
};

export default Vision;

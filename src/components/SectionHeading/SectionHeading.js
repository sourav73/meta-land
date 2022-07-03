import React from "react";
import styles from "./SectionHeading.module.scss";

const SectionHeading = ({ text }) => {
  return <h5 className={styles.heading}>{text}</h5>;
};

export default SectionHeading;

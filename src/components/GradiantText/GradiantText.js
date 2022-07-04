import React from "react";
import styles from "./GradiantText.module.scss";

const GradiantText = ({ text, className }) => {
  return <span className={`${styles.gradiant} ${className}`}>{text}</span>;
};

export default GradiantText;

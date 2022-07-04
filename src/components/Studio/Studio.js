import React from "react";
import styles from "./Studio.module.scss";

const Studio = ({ text, className }) => {
  return <h5 className={`${styles.studioText} ${className}`}>{text}</h5>;
};

export default Studio;

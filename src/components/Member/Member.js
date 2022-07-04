import React from "react";
import styles from "./Member.module.scss";

const Member = ({ name, designation, hasTwitter, twitterLink }) => {
  return (
    <div className={styles.member}>
      {hasTwitter ? (
        <div className="name d-flex align-items-center">
          <h6 className="me-2 mb-0">{name}</h6>
          <a href={twitterLink}>
            <img src="./images/twitter.png" alt="Twitter" />
          </a>
        </div>
      ) : (
        <div className="name">
          <h6>{name}</h6>
        </div>
      )}

      <div className="designation">
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Member;

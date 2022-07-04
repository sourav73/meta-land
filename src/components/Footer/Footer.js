import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="max-width d-flex justify-content-between align-items-center"
    >
      <div className="d-flex align-items-center flex-column flex-md-row mb-4 mb-md-0">
        <a href="#intro" className={styles.navBrand}>
          Meta
        </a>
        <div>
          <p>An interoperable #metaverse with fast action</p>
          <p>games for the entire #NFT community.</p>
          <p>©2022 Meta</p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <a href="#nolink">Twitter</a>
          </li>
          <li>
            <a href="#nolink">Discord</a>
          </li>
          <li>
            <a href="#nolink">Terms and conditions</a>
          </li>
          <li>
            <a href="#nolink">Privacy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

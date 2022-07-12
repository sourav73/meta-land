import React from "react";
import "./Footer.module.scss";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="max-width d-flex justify-content-between align-items-center"
    >
      <div className="d-flex align-items-center flex-column flex-md-row mb-4 mb-md-0">
        <div>
          <p>© 2022 by Tomorrow Land - a NFT MetaLand Build on the Ethereum Blockchain</p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://discord.com/">Discord</a>
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

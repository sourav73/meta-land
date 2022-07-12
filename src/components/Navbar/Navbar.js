import { useState } from "react";

import styles from "./Navbar.module.scss";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="main-header">
      <header className={`${styles.header}`}>
        <nav className="d-flex justify-content-between align-items-center h-100">
          <div className={`${styles.mainNav} text-center`}>
            <div className={`me-auto ${styles.navBrand}`}>
              <a href="#intro" className={`navbar-brand ${styles.customBrand}`}>
                <img src="images/01.png" className="me-4" height={40} alt="meta logo"/>
                <span className={styles.brandText}>Tomorrow Land</span>
              </a>
            </div>
          </div>
          <div className={`${styles.signIn}`}>
            <ul className="d-flex ps-0 mb-0">
              <li className="me-3">
                <a href="#home">Home</a>
              </li>
              <li className="mx-3">
                <a href="#roadmap">Roadmap</a>
              </li>
            </ul>
            {/* <a href="#signin">Sign in</a> */}
            <div className={styles.navToggle}>
              <i
                className="fa-solid fa-2x fa-bars"
                onClick={handleNavToggle}
              ></i>
            </div>
          </div>
        </nav>
      </header>
      {/* Navbar for smaller screens */}
      <div className={`${styles.mobileNav} ${isOpen ? "show" : ""}`}>
        <div className={styles.navClose}>
          <i className="fa-solid fa-2x fa-x" onClick={closeNav}></i>
        </div>
        <nav className="">
          <ul className="ps-0 mb-0">
            <li>
              <a href="#home" onClick={closeNav}>
                Home
              </a>
            </li>
            <li>
              <a href="#roadmap" onClick={closeNav}>
                Road Map
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

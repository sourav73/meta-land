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
            <div className={styles.navBrand}>
              <a href="#intro" className={styles.navLink}>
                Meta
              </a>
            </div>
            <ul className="d-flex ps-0 mb-0">
              <li className="me-3">
                <a href="#profile">Profile</a>
              </li>
              <li className="mx-3">
                <a href="#map">Map</a>
              </li>
              <li className="ms-3">
                <a href="#collection">Collection</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.signIn}`}>
            {/* <button>
              <i className="fa-solid fa-volume-high"></i>
            </button> */}
            {/* <button><i className="fa-solid fa-volume-xmark"></i></button> */}
            <a href="#signin">Sign in</a>
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
              <a href="#profile" onClick={closeNav}>
                Profile
              </a>
            </li>
            <li>
              <a href="#map" onClick={closeNav}>
                Map
              </a>
            </li>
            <li>
              <a href="#collection" onClick={closeNav}>
                Collection
              </a>
            </li>
            <li>
              <a href="#nolink" onClick={closeNav}>
                Twitter
              </a>
            </li>
            <li>
              <a href="#nolink" onClick={closeNav}>
                Discord
              </a>
            </li>
            <li>
              <a href="#nolink" onClick={closeNav}>
                Terms and conditions
              </a>
            </li>
            <li>
              <a href="#nolink" onClick={closeNav}>
                Privacy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

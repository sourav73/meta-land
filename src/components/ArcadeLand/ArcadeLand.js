import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./ArcadeLand.module.scss";

const ArcadeLand = () => {
  return (
    <section id="arcade-land" className="max-width">
      <div className="container heading text-center mb-3">
        <SectionHeading text="Metaland gives you" />
      </div>
      {/* Cards */}
      <div className="cards">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-lg-3 mb-3 mb-lg-0">
              <div className={styles.card}>
                <h5>Drops</h5>
                <p>Tokens, NFTs, metaverse and game resources.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 mb-lg-0">
              <div className={styles.card}>
                <h5>Community</h5>
                <p>
                  Be part of a community of landowners and create user generated
                  items.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 mb-lg-0">
              <div className={styles.card}>
                <h5>Access</h5>
                <p>Access to additional drops / merch / events.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-3 mb-lg-0">
              <div className={styles.card}>
                <h5>Earn</h5>
                <p>
                  Rent, advertise, launch stores, create items, with your land's
                  resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lands sizes */}
      <div className={`${styles.landSizes} my-5`}>
        <div className="container-lg my-5">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0 align-self-center">
              <div className="">
                <SectionHeading text="Multiple regions and different attributes" />
              </div>
              <div className={styles.list}>
                <ul>
                  <li>Land's region will be randomized at mint.</li>
                  <li>Different regions will have different rarity.</li>
                  <li>Each region will produce different resources.</li>
                  <li>Each region will have a unique metaverse experience.</li>
                  <li>Each region can build and create different items.</li>
                  <li>Each region will have a unique gaming experience.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <img src="./images/img-2.png" className="border-r-3 w-100" alt="Land region" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArcadeLand;

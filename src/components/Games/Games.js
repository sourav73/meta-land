import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Games.module.scss";

const Games = () => {
  return (
    <section id="game" className="max-width">
      {/* Avatars */}
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="./images/img-3.png" alt="avater"/>
          </div>
          <div className="col-md-6 align-self-center w-auto">
            <div className="heading text-center text-md-start">
              <SectionHeading text="Avatars" />
            </div>
            <div className={styles.list}>
              <ul>
                <li>Bring your NFTs to life.</li>
                <li>Be your PFP.</li>
                <li>Hangout, chat and play games togehter.</li>
                <li>All NFTs invited.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Games */}
      <div className="container-lg mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="heading text-center text-md-start">
              <SectionHeading text="Games and more thing to do" />
            </div>
            <div className={styles.list}>
              <ul>
                <li>
                  Many different PVP and PVE games to play together with your
                  friends.
                </li>
                <li>
                  Each PFP NFT collection will have unique in-game bonus or
                  powers.
                </li>
                <li>
                  Special perks for land owners to enhance the ARCADE metaverse
                  experience.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            {/* <div className="container-fluid">
              <div className="row">
                <div className="col-5 pe-0">
                  <img src="./images/game-1.png" alt="Game" className="h-100" />
                </div>
                <div className="col-7">
                  <div className="container-fluid px-0">
                    <div className="row">
                      <div className="col-12 mb-3">
                        <img src="./images/game-2.png" alt="Game" />
                      </div>
                      <div className="col-12">
                        <img src="./images/game-3.png" alt="Game" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <img src="/images/nft-grid.png" alt="NFT grid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;

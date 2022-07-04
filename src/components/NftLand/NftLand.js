import React from "react";
import styles from "./NftLand.module.scss";

const NftLand = () => {
  return (
    <section id="nft-land" className="max-width">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="./images/nft-world.png" alt="Nft World" />
          </div>
          <div className="col-md-6 align-self-center">
            <div className={styles.nftText}>
              <h5 className="mb-0">Land nft and</h5>
              <h5 className="mb-4">Metaland metaverse world</h5>
              <p>Get ready for the ultimate metaverse experience!</p>
              <p>
                We saw NFTs across web3 with no purpose, no direction, longing
                for something more. So we created Metaland Metaverse from the
                ground up to give the entire NFT community a place to care
                about, a place to call home.
              </p>
              <p>
                Metaland Metaverse is an adventurous world with different
                regions for you to discover and build with your friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftLand;

import React from "react";
import Member from "../Member/Member";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Team.module.scss";

const Team = () => {
  return (
    <section id="team" className="max-width">
      {/* More */}
      <div className="more px-3">
        <div className="heading text-center">
          <SectionHeading text="More coming soon" />
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              1st batch NFT project partnership announcement and integration
            </li>
            <li>Playable metaverse demo with partnered NFTs</li>
            <li>Exclusive Drops</li>
            <li>And more!</li>
          </ul>
        </div>
      </div>
      {/* Team */}
      <div className="team my-5 text-center">
        {/* General members */}
        <div className="container-fluid">
          <div className="heading mb-3">
            <SectionHeading text="Team" />
          </div>
          <div className="members">
            <div className="d-flex justify-content-center flex-wrap">
              <Member
                name="Edward"
                designation="Project Lead"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member name="Anthonoy" designation="Creative Strategy" />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <Member
                name="Kay"
                designation="Marketing"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member
                name="Ada"
                designation="Marketing"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member
                name="David"
                designation="Marketing"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member
                name="Sean"
                designation="Community"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member
                name="Kevin"
                designation="Community"
                hasTwitter={true}
                twitterLink="#nolink"
              />
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              <Member
                name="Andy"
                designation="Project Lead"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member name="Leo" designation="Creative Strategy"/>
              <Member name="Jason" designation="Creative Strategy"/>
              <Member name="Alson" designation="Creative Strategy"/>
              <Member name="Ben" designation="Creative Strategy"/>
              <Member name="Brian" designation="Creative Strategy"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

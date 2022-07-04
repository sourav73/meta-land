import React from "react";
import Member from "../Member/Member";
import SectionHeading from "../SectionHeading/SectionHeading";
import Studio from "../Studio/Studio";
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
                name="Willy Wu"
                designation="Project Lead"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member name="Leo" designation="Creative Strategy" />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <Member
                name="Kevin"
                designation="Marketing"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member
                name="Rebecca"
                designation="Marketing"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member
                name="Martin"
                designation="Marketing"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member
                name="Daniel"
                designation="Community"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member
                name="Elaine"
                designation="Community"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member name="Allison" designation="Community" />
              <Member
                name="Mark"
                designation="BD Strategy"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member
                name="Andy"
                designation="Partnerships"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member
                name="Tina"
                designation="Partnerships"
                hasTwitter={true}
                twitterLink="#nolink"
              />
              <Member name="Tingyu" designation="Product Manager" />
              <Member name="David" designation="Product" />
              <Member name="Abner" designation="Blockchain Developer" />
              <Member name="Anthony" designation="Blockchain Developer" />
              <Member name="Ray" designation="Blockchain Developer" />
              <Member name="Jack" designation="Developer" />
              <Member name="JT" designation="Developer" />
              <Member name="Sean" designation="Developer" />
              <Member name="Serena" designation="Developer" />
              <Member name="Fangyi" designation="Designer" />
              <Member name="Kay" designation="Designer" />
              <Member name="Luna" designation="Designer" />
              <Member name="Sirius" designation="Designer" />
              <Member name="Ada" designation="Accounting" />
              <Member name="Anna" designation="Office Manager" />
            </div>
          </div>
        </div>
        {/* JOJOLABS studio members */}
        <div className="container-fluid">
          <Studio text="Jojolabs" className="mb-5" />
          <div className="d-flex flex-wrap justify-content-center">
            <Member name="Jonas" designation="Professor" />
            <Member name="Tobby" designation="Fullstack Rockstar" />
            <Member name="Angus" designation="Blockchain Alchemist" />
            <Member name="YH" designation="iOS Hacker" />
            <Member name="Vince" designation="Android Guru" />
            <Member name="Momi" designation="Ravenclaw Grandmaster" />
            <Member name="Shirley" designation="Fullstack Magician" />
            <Member name="Fakesmallcc" designation="Chief Beverage Officer" />
            <Member name="Kimura" designation="Unity Samurai" />
          </div>
        </div>
        {/* YU SHENG ANIMATION STUDIO members */}
        <div className="container-fluid">
          <Studio text="Yu sheng animation studio" className="mb-5" />
          <div className="d-flex flex-wrap justify-content-center">
            <Member name="Johnny Lui" designation="Director" />
            <Member name="Rito" designation="Producer" />
            <Member name="Mimi Cloud" designation="Design Lead" />
            <Member name="Angel" designation="Designer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

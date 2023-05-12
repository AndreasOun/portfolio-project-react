import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
         Hello,
         <br /> <span className="info-name">My name is Andreas Õun</span>.
         <br /> I'm a Fullstack-developer
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
import React from "react";
import face from "./firstProjectPhoto.jpg";
import aboutMe from "./data/sellMe-data";


export default function Contact(props) {
  return (
    <section id="AboutMe" className="manager">
      <article className="aMArticle">
        <div className="aMImg">
          <img src={face} alt="me"/>
        </div>
        {aboutMe}
      </article>
      <div className="chasm aMChasm">
        <div className="chasmLeft aMChasmLeft">
          <div className="brAndHi">
            <div className="bridge aMBridge"/>
            <div className="shadow1 highlight1"/>
          </div>
        </div>
        <div className="chasmRight aMChasmRight">
          <div className="shadow2 highlight2" style={{ transform: `rotateZ(${Math.floor(70 * (1 - (window.innerWidth / 1440))) + 10}deg)` }}/>
        </div>
      </div>
    </section>
  );
}
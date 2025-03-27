import React from "react";
import face from "./firstProjectPhoto.jpg";
import aboutMe from "./data/sellMe-data";


export default function Contact(props) {
  return (
    <section id="Contact" className="manager">
      <article className="contactArt">
        <div className="conImg">
          <img src={face} alt="me"/>
          <h2>Hire Me</h2>
        </div>
        <div className="textCont">
          {aboutMe}
        </div>
      </article>
    </section>
  );
}
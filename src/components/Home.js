import React from "react";
import { Link } from "react-router-dom";

import logo from "./icons/Logo.png";

export default function About(props) {
  return (
    <section id="home" className={`${props.collapsed ? 'no-' : ''}manager about anchor`}>
      <div className="container">
        <article className="aboutArt">
          <header className="aboutHead">
            <img src={logo} alt="Daniel Jones tree/book logo" id="logo"/>
          </header>
          <div className="chasm homeChasm">
              <Link to={"/about-me"} className="homeLink" title="Contact" onClick={() => props.updatePage("about-me")} tabIndex="0">
                About Me
              </Link>
            <div className="chasmLeft homeChasmLeft">
              <div className="brAndSh">
                <div className="bridge homeBridge"/>
                <div className="shadow1 homeShadow1"/>
              </div>
            </div>
            <div className="chasmRight homeChasmRight">
              <div className="shadow2 homeShadow2" style={{ transform: `rotateZ(${Math.floor(70 * (1 - ((window.innerWidth > 1440 ? 1440 : window.innerWidth) / 1440))) + 10}deg)` }}/>
            </div>
          </div>
          <section className="aboutTags">
            <div className="aboutTag">
              <h2>Logic</h2>
              <span>
              I don’t approach web development with a one-size-fits-all mindset. I think outside the box by questioning conventions, challenging assumptions, and finding creative angles to solve complex problems. Whether I’m writing code or designing interfaces, I treat each project like a blank page, ready to be shaped by bold ideas and thoughtful logic. Innovation comes from exploring what others might overlook and building something meaningful from the ground up.
              </span>
              {props.codeCount}
            </div>
            <div className="aboutTag">
              <h2>Perspective</h2>
              <span>
                At the core of my work is a deep focus on perspective. As both a developer and an author, I understand how structure and storytelling work together. I care about how users experience what I build and how readers connect with what I write. Every detail matters, from the flow of a website to the rhythm of a sentence, because how something is seen and felt is just as important as how it functions.
              </span>
              {props.writeCount}
            </div>
          </section>
        </article>
        {props.counters}
      </div>
    </section>
  );
}
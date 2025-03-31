import React from "react";

import logo from "./icons/Logo.png";

export default function About(props) {
  return (
    <section id="home" className={`${props.collapsed ? 'no-' : ''}manager about anchor`}>
      <div className="container">
        <article className="aboutArt">
          <header className="aboutHead">
            <img src={logo} alt="Daniel Jones tree/book logo" id="logo"/>
          </header>
          <div className="chasm">
            <div className="chasmLeft">
              <div className="brAndSh">
                <div className="bridge"/>
                <div className="shadow1"/>
              </div>
            </div>
            <div className="chasmRight">
              <div className="shadow2" style={{ transform: `rotateZ(${Math.floor(70 * (1 - (window.innerWidth / 1440))) + 10}deg)` }}/>
            </div>
          </div>
          <section className="aboutTags">
            <div className="aboutTag">
              <span>
                My personal website started it all. freeCodeCamp gave me baby steps. HarvardX tested my ability. CS college courses solidified the knowledge. Personal projects (including accessible minesweeper) dialed it all in. And unbreakable drive pushed me through.
              </span>
              {props.codeCount}
            </div>
            <div className="aboutTag">
              <span>
                Before all that, I had an even more “from all over” set of experiences that lead to my success as a developer. These experiences fueled my desire for accessibility standards, opened my mind to complex and scalable designs, and developed my logical thinking.
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
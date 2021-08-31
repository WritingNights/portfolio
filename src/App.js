import './App.css';

import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import React from 'react';

import html from "./components/LogoHTML5.jpg";
import css from "./components/LogoCSS3.jpg";
import js from "./components/LogoJS.jpg";
import py from "./components/LogoPython.png";
import dj from "./components/LogoDjango.svg";
import react from "./components/LogoReact.png";
import java from "./components/LogoJava.jpg";
import flask from "./components/LogoFlask.jpg";

import univ from "./components/UniversalThumbnail.jpg";
import curr from "./components/Currency.jpg";
import network from "./components/Network.jpg";

const skills = [
  {
      skill: 'HTML',
      confidence: 4,
      image: html
  },
  {
      skill: 'CSS',
      confidence: 4,
      image: css
  },
  {
      skill: 'JavaScript',
      confidence: 4,
      image: js
  },
  {
      skill: 'Python',
      confidence: 3,
      image: py
  },
  {
      skill: 'Django',
      confidence: 3,
      image: dj
  },
  {
      skill: 'React',
      confidence: 2,
      image: react
  },
  {
      skill: 'Java',
      confidence: 1,
      image: java
  },
  {
      skill: 'Flask',
      confidence: 1,
      image: flask
  }
];

const projects = [
  {
    title: 'Currency (CS50x final)',
    tools: ['HTML', 'CSS', 'Python', 'Flask'],
    image: curr,
    gitLink: 'https://github.com/me50/WritingNights/tree/cs50/problems/2020/x/project',
    youtubeLink: 'https://youtu.be/PZjBfZdohSc'
  },
  {
    title: 'Network',
    tools: ['HTML', "CSS", 'JavaScript', 'Python', 'Django'],
    image: network,
    gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/network',
    youtubeLink: 'https://youtu.be/sDkqIoyUZ3M'
  },
  {
    title: 'Universal: World Builder',
    tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
    image: univ,
    gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/capstone',
    youtubeLink: 'https://youtu.be/D-I8_pMc8Co'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      show: skills
    }
    this.changePage = this.changePage.bind(this);
  }
  changePage(change) {
      const { pageNum } = this.state;
      if (change === 'minus' && pageNum !== 0) {
          this.setState({pageNum: pageNum - 1});
          this.updateShow(pageNum - 1);
      } else if (change === 'plus' && pageNum < projects.length + 1) {
          this.setState({pageNum: pageNum + 1});
          this.updateShow(pageNum + 1);
      }
  }
  updateShow(pageNum) {
    if (pageNum === 0 || pageNum > projects.length) {
      this.setState({show: skills});
    } else {
      const skillArray = skills.map((obj, i, array) => {
        for (let j = 0; j < projects[pageNum - 1].tools.length; j++) {
          if (array[i].skill === projects[pageNum - 1].tools[j]) {
            return array[i];
          }
        }
        return undefined;
      });
      this.setState({show: skillArray.filter((element) => {
        if (element !== undefined) {
          return element;
        }
      })});
    }
  }
  render() {
    return (
      <main>
        <Navbar />
        <About />
        <div id="package">
          <Projects projects={projects} changePage={this.changePage} pageNum={this.state.pageNum} />
          <Skills skills={this.state.show} />
        </div>
        <Contact />
      </main>
    );
  }
}

export default App;
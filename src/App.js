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
    description: [
      'My first personal project helped me understand the basics of Flask (my first framework) and utilize Python backend to handle unique user sessions.',
      'I based my project on the idea of building currency in a fluctuating market. In the background of the app, a function uses the time of day, day of the month, and month of the year to determine fluctuating prices.',
      'Its a basic application with very little variety, but a strong start.'
    ],
    gitLink: 'https://github.com/me50/WritingNights/tree/cs50/problems/2020/x/project',
    youtubeLink: 'https://youtu.be/PZjBfZdohSc'
  },
  {
    title: 'Network',
    tools: ['HTML', "CSS", 'JavaScript', 'Python', 'Django'],
    image: network,
    description: [
      'My introduction to pagination, network runs similarly to twitter. It\'s a project everyone is required to make, but I took certain parts into my own hands to make it personal.',
      'I started working with keyframes to make animations, used AJAX to update the DOM, and designed a somewhat monochrome (somewhat) layout.',
    ],
    gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/network',
    youtubeLink: 'https://youtu.be/sDkqIoyUZ3M'
  },
  {
    title: 'Universal: World Builder',
    tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
    image: univ,
    description: [
      'My most recent project, and most complex, Universal is an app for those desinging a story world for any kind of thing. While it has basic features, the ability of the user to build out ideas is grand.',
      'I pushed Django templates to the limit (limit for me) to make two separate forms. Coupled my learning of React to do DOM rendering with vanilla JS while the Django database was scalable to match the user\'s needs.',
      'This project was a triumph of my CSS skills as I learned techniques to tagret elements with a few new psuedo-selectors.',
      'Another task was to make the pages mobile friendly, which pushed me to think about a new set of rules and restrictions for each screen size. Now I use mobile responsiveness in my current projects, as well as push for accessibility standards.'
    ],
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
      // eslint-disable-next-line
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
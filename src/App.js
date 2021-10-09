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

import amzn from "./components/Amazon.png";
import tic from "./components/Tic-Tac-Toe.png";
import univ from "./components/Universal.png";
import curr from "./components/Currency.png";
import network from "./components/Network.png";
import mail from "./components/Mail.png";
import comm from "./components/Commerce.png";
import wiki from "./components/Wiki.png";
import goog from "./components/Search.png";

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
    title: 'Search',
    tools: ['HTML', 'CSS'],
    image: goog,
    description: [
      'This was my first project as a part of the CS50 Web course where I was tasked with recreating the Google search page.',
      'I made it using only HTML and CSS. This was my first experience with connecting search inputs, which google uses to create/filter each search.'
    ],
    gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/search',
    youtubeLink: 'https://youtu.be/Mjt3Ene4XCc'
  },
  {
    title: 'Wiki',
    tools: ['HTML', 'CSS', 'Python', 'Django'],
    image: wiki,
    description: [
      'With this project, I was tasked with using markdown to create a Wikipedia replica. I was my first exposure to markdown.',
      'I created a sidebar navigation with a search that looked for all instances of a string and not just exact matches.',
      'As well, users could also create their own entries converted from markdown, and edit existing ones too.'
    ],
    gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/wiki',
    youtubeLink: 'https://youtu.be/-sxVXifkaOk'
  },
  {
    title: 'Commerce',
    tools: ['HTML', 'CSS', 'Python', 'Django'],
    image: comm,
    description: [
      'I was tasked to create an eBay replica using the technologies they taught so far. This is where I learned a wider range of things about Django.',
      'I learned how to create/use the admin page and creating links using variables on templates.',
      'It was the first time I added user input options with a lot of ways to sort and track info per user.'
    ],
    gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/commerce',
    youtubeLink: 'https://youtu.be/Rzd3jwOAF8Y'
  },
  {
    title: 'Mail',
    tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
    image: mail,
    description: [
      'This project was my first deep dive into the connection between Javascript and the DOM.',
      'I also used AJAX to move the user around the page as they follow certain action buttons.'
    ],
    gitLink: 'https://github.com/me50/WritingNights/tree/web50/projects/2020/x/mail',
    youtubeLink: 'https://youtu.be/Rw2MzehrpVM'
  },
  {
    title: 'Network',
    tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
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
  },
  {
    title: 'Tic-Tac-Toe',
    tools: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: tic,
    description: [
      'This was the first project I completed on my own in React after creating my React portfolio.',
      'I used a 2D array to store values of "X", "O", or "". When a user clicks a box, I update that point in the array and replace it in the state.',
      'Besides creating this to make my first game, and to build something in React, I strived to make something intuitive and clean.',
      'A notable feature include restarting the game after someone wins by clicking the winner screen.'
    ],
    gitLink: 'https://github.com/WritingNights/tic-tac-toe',
    youtubeLink: null
  },
  {
    title: 'Amazon Prime Sign-up Clone',
    tools: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: amzn,
    description: [
      'I built this project while being considered for a position at Amazon. It was a personal project to understand how the main pages worked for customers.',
      'I learned more about background-images and custom icons while also making more component-based elements.'
    ],
    gitLink: 'https://github.com/WritingNights/amazon',
    youtubeLink: null
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      show: skills,
      currentImg: '',
      currentAlt: ''
    }
    this.changePage = this.changePage.bind(this);
    this.updateShow = this.updateShow.bind(this);
    this.updateImg = this.updateImg.bind(this);
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
  updateImg(img, alt) {
    if (img) {
      this.setState({
        currentImg: img,
        currentAlt: alt
      })
    } else {
      this.setState({
        currentImg: '',
        currentAlt: ''
      })
    }
  }
  render() {
    const style = this.state.currentImg ? {zIndex: 50} : {zIndex: -1} ;
    return (
      <main>
        <Navbar />
        <About />
        <div id="package">
          <Projects projects={projects} changePage={this.changePage} pageNum={this.state.pageNum} fullImg={this.updateImg} />
          <Skills skills={this.state.show} />
          <div className="fullImg" onClick={() => this.updateImg('','')} style={style}><img src={this.state.currentImg} alt={this.state.currentAlt}/></div>
        </div>
        <Contact />
      </main>
    );
  }
}

export default App;
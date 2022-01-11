import './App.css';

import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import React from 'react';

import skills from "./components/data/skills-data";

import projects from "./components/data/projects-data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      show: skills,
      currentImg: '',
      currentAlt: '',
      light: true,
      proWidth: 0
    }
    this.changePage = this.changePage.bind(this);
    this.updateShow = this.updateShow.bind(this);
    this.updateImg = this.updateImg.bind(this);
    this.updateTheme = this.updateTheme.bind(this);
    this.animateProgressBar = this.animateProgressBar.bind(this);
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

  updateTheme() {
    this.setState({
      light: !this.state.light
    });
  }

  animateProgressBar() {
    const body = document.querySelector('body');
    let scrollDistance = -body.getBoundingClientRect().top;
    let progressWidth = (scrollDistance /
      (body.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
    this.setState({
      proWidth: progressWidth < 0 ? 0 : Math.floor(progressWidth)
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.animateProgressBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.animateProgressBar);
  }

  render() {
    const style = this.state.currentImg ? {zIndex: 50} : {zIndex: -1} ;
    let mode = this.state.light ? 'light-' : 'dark-';
    return (
      <main>
        <div id="progressBar" style={{width: this.state.proWidth + '%'}}/>
        <Navbar light={this.state.light} updateTheme={this.updateTheme} mode={mode} />
        <About mode={mode} />
        <div id="package" className={`${mode}package`}>
          <Projects projects={projects} changePage={this.changePage} pageNum={this.state.pageNum} fullImg={this.updateImg} mode={mode} />
          <Skills skills={this.state.show} mode={mode} />
          <div className="fullImg" onClick={() => this.updateImg('','')} style={style}><img src={this.state.currentImg} alt={this.state.currentAlt}/></div>
        </div>
        <Contact mode={mode} />
      </main>
    );
  }
}

export default App;
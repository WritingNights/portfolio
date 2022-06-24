import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import ProjectSwitch from "./components/ProjectSwitch.js";
import OldProjects from "./components/OldProjects.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";

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
      //proWidth: 0,
      newProjects: true
    }

    this.changePage = this.changePage.bind(this);
    this.updateShow = this.updateShow.bind(this);
    this.updateImg = this.updateImg.bind(this);
    this.updateTheme = this.updateTheme.bind(this);
    //this.animateProgressBar = this.animateProgressBar.bind(this);
    this.updateProjects = this.updateProjects.bind(this);
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

  updateProjects(value) {
    this.setState({ newProjects: value === 'true' });
  }

  /*animateProgressBar() {
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
  }*/

  render() {
    const style = this.state.currentImg ? {zIndex: 50} : {zIndex: -1};
    let mode = this.state.light ? 'light-' : 'dark-';

    const packageData = {
      projects: projects,
      changePage: this.changePage,
      pageNum: this.state.pageNum,
      updateImg: this.updateImg,
      mode: mode,
      skills: this.state.show,
      style: style,
      currentImg: this.state.currentImg,
      currentAlt: this.state.currentAlt
    };

    const proUpdaters = {
      updateProjects: this.updateProjects,
      newProjects: this.state.newProjects
    }

    return (
      <main>
        {/*<div id="progressBar" style={{width: this.state.proWidth + '%'}}/>*/}
        <Navbar light={this.state.light} updateTheme={this.updateTheme} mode={mode} />
        <Routes>
          <Route path={"/"} element={<About mode={mode} />} />
          <Route path={"/projects"} element={this.state.newProjects ? <Projects data={packageData} projectSwitch={<ProjectSwitch proUpdaters={proUpdaters} />} /> : <Package data={packageData} proUpdaters={proUpdaters} />} />
          <Route path={"/contact"} element={<Contact mode={mode} />} />
        </Routes>
      </main>
    );
  }
}

const Package = props => {
  return (
    <div id="package" className={`${props.data.mode}package`}>
      <ProjectSwitch proUpdaters={props.proUpdaters} />
      <OldProjects projects={props.data.projects} changePage={props.data.changePage} pageNum={props.data.pageNum} fullImg={props.data.updateImg} mode={props.data.mode} />
      <Skills skills={props.data.skills} mode={props.data.mode} />
      <div className="fullImg" onClick={() => props.data.updateImg('','')} style={props.data.style}><img src={props.data.currentImg} alt={props.data.currentAlt}/></div>
    </div>
  );
}

export default App;
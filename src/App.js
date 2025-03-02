import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import About from "./components/About.js";
import ProjectSwitch from "./components/ProjectSwitch.js";
import OldProjects from "./components/OldProjects.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";


import Navbar from "./components/Navbar.js";

import Writing from "./components/Writing.js";
import Websites from "./components/Websites.js";
import Graphics from "./components/Graphics.js";
import Podcast from "./components/Podcast.js";

import Footer from "./components/Footer.js";

import skills from "./components/data/skills-data";
import websites from "./components/data/projects-data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNum: 0,
      show: skills,
      currentImg: '',
      currentAlt: '',
      newProjects: true
    }

    this.changePage = this.changePage.bind(this);
    this.updateShow = this.updateShow.bind(this);
    this.updateImg = this.updateImg.bind(this);
    this.updateProjects = this.updateProjects.bind(this);
  }

  changePage(change) {
    const { pageNum } = this.state;
    if (change === 'minus' && pageNum !== 0) {
      this.setState({pageNum: pageNum - 1});
      this.updateShow(pageNum - 1);
    } else if (change === 'plus' && pageNum < websites.length + 1) {
      this.setState({pageNum: pageNum + 1});
      this.updateShow(pageNum + 1);
    }
  }

  updateShow(pageNum) {
    if (pageNum === 0 || pageNum > websites.length) {
      this.setState({show: skills});
    } else {
      const skillArray = skills.map((obj, i, array) => {
        for (let j = 0; j < websites[pageNum - 1].tools.length; j++) {
          if (array[i].skill === websites[pageNum - 1].tools[j]) {
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

  updateProjects(value) {
    this.setState({ newProjects: value === 'true' });
  }

  render() {
    const style = this.state.currentImg ? {zIndex: 50} : {zIndex: -1};

    const packageData = {
      projects: websites,
      changePage: this.changePage,
      pageNum: this.state.pageNum,
      updateImg: this.updateImg,
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
        <Navbar />
        <Routes>
          <Route path={"/"} element={<About />} />
          <Route path={"/projects"} element={this.state.newProjects ? <Projects data={packageData} projectSwitch={<ProjectSwitch proUpdaters={proUpdaters} />} /> : <Package data={packageData} proUpdaters={proUpdaters} />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/writing"} element={<Writing />} />
          <Route path={"/websites"} element={<Websites />} />
          <Route path={"/graphics"} element={<Graphics />} />
          <Route path={"/podcast"} element={<Podcast />} />
        </Routes>
        <Footer />
      </main>
    );
  }
}

const Package = props => {
  return (
    <div id="package" className="package">
      <ProjectSwitch proUpdaters={props.proUpdaters} />
      <OldProjects projects={props.data.websites} changePage={props.data.changePage} pageNum={props.data.pageNum} fullImg={props.data.updateImg} />
      <Skills skills={props.data.skills} />
      <div className="fullImg" onClick={() => props.data.updateImg('','')} style={props.data.style}><img src={props.data.currentImg} alt={props.data.currentAlt}/></div>
    </div>
  );
}

export default App;
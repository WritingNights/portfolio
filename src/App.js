import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
import moment from "moment";

import Navbar from "./components/Navbar.js";

import Home from "./components/Home.js";
import Writing from "./components/Writing.js";
import Websites from "./components/Websites.js";
import Graphics from "./components/Graphics.js";
import Podcast from "./components/Podcast.js";
import Template from "./components/Template.js";
import Game from "./components/Games.js"

import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";

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
      newProjects: true,
      collapsed: false,
      fixed: false,
      page: window.location.pathname.split('/')[1] ? window.location.pathname.split('/')[1] : 'home',
      codeCount: {years: 0, months: 0, days: 0},
      writeCount: {years: 0, months: 0, days: 0}
    }

    this.updateShow = this.updateShow.bind(this);
    this.collapse = this.collapse.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.countUp = this.countUp.bind(this);
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

  collapse() {
    const { collapsed, fixed } = this.state;
    if (collapsed) {
      gsap.fromTo('#collapseDiv', {transform: 'translateY(0)'}, {transform: 'translateY(-110%)', duration: 1, ease: 'power3.out', onComplete: () => this.setState({ collapsed: !collapsed })});
      gsap.fromTo('#collapseDiv', {transform: 'translateY(-110%)'}, {transform: 'translateY(0)', duration: 1, ease: 'power3.out', delay: 1});
    } else {
      if (!fixed) {
        gsap.fromTo(`main > section`, {transform: 'translateY(0)'}, {transform: 'translateY(-5rem)', duration: 1, ease: 'power3.out', onComplete: () => {gsap.set(`main > section`, { clearProps: 'transform' })}});
      }
      gsap.fromTo('#navbar', {transform: 'translateY(0)'}, {transform: 'translateY(-110%)', duration: 1, ease: 'power3.out', onComplete: () => this.setState({ collapsed: !collapsed })});
      gsap.fromTo('#navbar', {transform: 'translateY(-110%)'}, {transform: 'translateY(0)', duration: 1, ease: 'power3.out', delay: 1});
    }
  }

  updatePage(page) {
    this.setState({page: page});
  }

  countUp(date) {
    const start = moment(date);
    const now = moment();

    const diff = moment.duration(now.diff(start))._data;

    return ({years: diff.years, months: diff.months, days: diff.days});
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    const { collapsed, fixed } = this.state;
    if (!collapsed && window.innerHeight + 200 < document.documentElement.scrollHeight) {
      if (scrollPosition > 80 && !fixed) {
        this.setState({fixed: true});
        gsap.fromTo('#navbar', {transform: 'translateY(-100%)'}, {transform: 'translateY(0)', duration: 2, ease: 'power3.out'});
      }
    }
    if (scrollPosition < 10 && fixed) {
      this.setState({fixed: false});
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    /*const packageData = {
      projects: websites,
      updateImg: this.updateImg,
      skills: this.state.show,
      currentImg: this.state.currentImg,
      currentAlt: this.state.currentAlt
    };*/

    const { collapsed, fixed } = this.state;

    return (
      <main>
        <Navbar updatePage={this.updatePage} collapse={this.collapse} collapsed={collapsed} fixed={fixed} />
        <Routes>
          <Route path={"/"} element={<Home collapsed={collapsed} counters={<Counters countUp={this.countUp} />} />} />
          <Route path={"/contact"} element={<Contact collapsed={collapsed} />} />
          <Route path={"/writing"} element={<Writing collapsed={collapsed} />} />
          <Route path={"/websites"} element={<Websites collapsed={collapsed} websites={websites} />} />
          <Route path={"/websites/game/:item"} element={<Game collapsed={collapsed} websites={websites} />} />
          <Route path={"/websites/:item"} element={<Template collapsed={collapsed} />} />
          <Route path={"/graphics"} element={<Graphics collapsed={collapsed} />} />
          <Route path={"/graphics/:item"} element={<Template collapsed={collapsed} />} />
          <Route path={"/podcast"} element={<Podcast collapsed={collapsed} />} />
        </Routes>
        <Footer updatePage={this.updatePage} />
      </main>
    );
  }
}

const Counter = (props) => {
  const obj = props.countUp(props.date);

  return (
    <div className="count-body">
      <h2>Days since I started to {props.label}</h2>
      <div className="counts">
        <div className="container-years">
          <h3 className="year">{obj.years}</h3>
          <h3 className="count-label">{obj.years === 1 ? 'Year' : 'Years'}</h3>
        </div>
        <div className="container-months">
          <h3 className="month">{obj.months}</h3>
          <h3 className="count-label">{obj.months === 1 ? 'Month' : 'Months'}</h3>
        </div>
        <div className="container-days">
          <h3 className="day">{obj.days}</h3>
          <h3 className="count-label">{obj.days === 1 ? 'Day' : 'Days'}</h3>
        </div>
      </div>
    </div>
  );
}

const Counters = (props) => {
  return (<div>
    <Counter label={"code"} countUp={props.countUp} date={'2020-05-11 00:00:00'} />
    <Counter label={"write"} countUp={props.countUp} date={'2015-07-25 00:00:00'} />
  </div>);
}

export default App;
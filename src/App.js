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
import AboutMe from "./components/AboutMe.js";

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
      writeCount: {years: 0, months: 0, days: 0},
      contactForm: false,
      formName: '',
      formEmail: '',
      formMessage: ''
    }

    this.collapse = this.collapse.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.countUp = this.countUp.bind(this);
    this.contact = this.contact.bind(this);
    this.encode = this.encode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
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

//    gsap.fromTo('.actualForm', {transform: 'translateY(-50%)', opacity: 0}, {transform: 'translateY(0)', opacity: 1, duration: 1, ease: 'power3.out'});

  contact(active) {
    this.setState({ contactForm: active });
    if (active) {
      window.addEventListener('click', this.handleClick);
    }
  }

  encode(data) {
    return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
  }

  handleSubmit(e) {
    const { name, email, message } = this.state;
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", name, email, message })
    })
      .then(() => {
        this.setState({name: '', email: '', message: ''});
        alert("Message sent!");
      })
      .catch(error => alert(error));
  }

  updateState(key, value) {
    this.setState({ [key]: value });
  }

  handleClick = (e) => {
    if (e.target.className === 'contactForm') {
      window.removeEventListener('click', this.handleClick);
      this.contact(false);
    }
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

    const { collapsed, fixed, formName, formEmail, formMessage } = this.state;

    return (
      <main>
        {this.state.contactForm ? <Contact handleSubmit={this.handleSubmit} contact={this.contact} updateState={this.updateState} name={formName} email={formEmail} message={formMessage} /> : ''}
        <Navbar updatePage={this.updatePage} collapse={this.collapse} collapsed={collapsed} fixed={fixed} />
        <Routes>
          <Route path={"/"} element={<Home collapsed={collapsed} codeCount={<Counter label={"code"} countUp={this.countUp} date={'2020-05-11 00:00:00'}/>} updatePage={this.updatePage} writeCount={<Counter label={"write"} countUp={this.countUp} date={'2015-07-25 00:00:00'}/>} />} />
          <Route path={"/about-me"} element={<AboutMe collapsed={collapsed} />} />
          <Route path={"/writing"} element={<Writing collapsed={collapsed} />} />
          <Route path={"/websites"} element={<Websites collapsed={collapsed} websites={websites} />} />
          <Route path={"/websites/game/:item"} element={<Game collapsed={collapsed} websites={websites} />} />
          <Route path={"/websites/:item"} element={<Template collapsed={collapsed} />} />
          <Route path={"/graphics"} element={<Graphics collapsed={collapsed} />} />
          <Route path={"/graphics/:item"} element={<Template collapsed={collapsed} />} />
          <Route path={"/podcast"} element={<Podcast collapsed={collapsed} />} />
        </Routes>
        <Footer contact={this.contact} />
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
        <div className="years">
          <h3 className="year">{obj.years}</h3>
          <h3 className="countLabel">{obj.years === 1 ? 'Year' : 'Years'}</h3>
        </div>
        <div className="months">
          <h3 className="month">{obj.months}</h3>
          <h3 className="countLabel">{obj.months === 1 ? 'Month' : 'Months'}</h3>
        </div>
        <div className="days">
          <h3 className="day">{obj.days}</h3>
          <h3 className="countLabel">{obj.days === 1 ? 'Day' : 'Days'}</h3>
        </div>
      </div>
    </div>
  );
}

const Contact = (props) => {
  return (<div className="contactForm">
    <form netlify="true" name="contact" onSubmit={props.handleSubmit} className="actualForm">
      <div tabIndex="0" onClick={() => props.contact(false)} onKeyDown={e => e.keyCode === 13 ? props.contact(false) : ''} className="contactClose">X</div>
      <section className="formInputs">
        <div className="conInp">
          {/*<label htmlFor="name">Name</label>*/}
          <input type="text" id="name" name="name" onChange={(e) => props.updateState( 'formName', e.target.value )} value={props.name} placeholder="Name" tabIndex="0" required/>
        </div>
        <div className="conInp">
          {/*<label htmlFor="email">Email</label>*/}
          <input type="email" id="email" name="email" onChange={(e) => props.updateState( 'formEmail', e.target.value )} value={props.email} placeholder="Email" tabIndex="0" required/>
        </div>
        <div className="conInp">
          {/*<label htmlFor="message">Message</label>*/}
          <textarea type="text" id="message" name="message" onChange={(e) => props.updateState( 'formMessage', e.target.value )} value={props.message} placeholder="Message" tabIndex="0" />
        </div>
        <button type="submit" tabIndex="0">Send</button>
      </section>
    </form>
  </div>);
}

export default App;
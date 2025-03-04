import React from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import collapse from "./icons/Collapse.png";
import collapseD from "./icons/CollapseD.png";
import icon from "./icons/Icon.png";
import beacon from "./icons/Beacon.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAnim: {},
      expanded: false,
      /*collapsed: false,*/
      socials: false,
      topperStyle: {},
      socialStyle: {display: 'none'}
    }

    this.ref = React.createRef();

    this.hoverEffect = this.hoverEffect.bind(this);
    this.hoverStop = this.hoverStop.bind(this);
    this.anchorShift = this.anchorShift.bind(this);
    /*this.collapse = this.collapse.bind(this);*/
    this.keyPress = this.keyPress.bind(this);
  }

  hoverEffect(e) {
    if (e.target.className === "leftLink") {
      this.setState({
        currentAnim: gsap.fromTo(`#${e.target.firstChild.id}`, {rotation: '-10deg'}, {rotation: '0deg', duration: .5, ease: 'elastic.out(2.5, 0.5)', yoyo: true, repeat: -1})
      })
    }
  }

  hoverStop(e) {
    if (e.target.className === "leftLink") {
      this.state.currentAnim.progress(1);
      this.state.currentAnim.pause();
    }
  }

  anchorShift() {
    const { expanded } = this.state;
    gsap.fromTo('#nav-left', {transform: 'translateX(0)', opacity: 1}, {transform: 'translateX(-110%)', opacity: 0, duration: 1, ease: 'power3.out', onComplete: () => this.setState({ expanded: !expanded })});
    gsap.fromTo('#nav-left', {transform: 'translateX(-110%)', opacity: 0}, {transform: 'translateX(0)', opacity: 1, duration: 1, ease: 'power3.out', delay: 1});
  }

  /*collapse() {
    const { collapsed } = this.state;
    if (collapsed) {
      gsap.fromTo('#collapseDiv', {transform: 'translateY(0)'}, {transform: 'translateY(-110%)', duration: 1, ease: 'power3.out', onComplete: () => this.setState({ collapsed: !collapsed })});
      gsap.fromTo('#collapseDiv', {transform: 'translateY(-110%)'}, {transform: 'translateY(0)', duration: 1, ease: 'power3.out', delay: 1});
    } else {
      gsap.fromTo('#navbar', {transform: 'translateY(0)'}, {transform: 'translateY(-110%)', duration: 1, ease: 'power3.out', onComplete: () => this.setState({ collapsed: !collapsed })});
      gsap.fromTo('#navbar', {transform: 'translateY(-110%)'}, {transform: 'translateY(0)', duration: 1, ease: 'power3.out', delay: 1});
    }
  }*/

  keyPress(e) {
    if (e.keyCode === 13) {
      if (e.target.id === 'closeAnchors' || e.target.id === 'openAnchors') {
        this.anchorShift();
      }
      if (e.target.title === 'Dark Mode') {
        this.props.updateTheme();
      }
    }
  }

  componentDidMount() {
    this.setState({ expanded: true });
  }

  render() {
    const { collapsed, fixed } = this.props;
    if (collapsed) {
      return (<div id="collapseDiv">
        <img src={collapseD} alt="collapse" id="collapseClose" style={{width: "2rem", cursor: "pointer"}} onClick={this.props.collapse} tabIndex="0" />
      </div>);
    } else {
      return (
        <div id="navbar" className={`${fixed ? 'fixed' : 'stuck'}`}>
          {this.state.expanded ? (<div id="nav-left" className="navbar-left">
          <div id="closeAnchors" onClick={this.anchorShift} title="Close Nav" tabIndex="0" onKeyUp={this.keyPress}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill='black' className="bi bi-chevron-bar-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
            </svg>
          </div>
          <Link to={"/projects"} className="leftLink" title="Projects" onMouseOver={this.hoverEffect} onMouseOut={this.hoverStop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='black' className="bi bi-code-slash" id="projectsSVG" viewBox="0 0 16 14">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
            &nbsp;Projects
          </Link>
          </div>) : (<div id="nav-left" className="navbar-left">
          <div id="openAnchors" onClick={this.anchorShift} title="Open Nav" tabIndex="0" onKeyUp={this.keyPress}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill='black' className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
          </div>)}
          <div id="newLinks">
            <Link to={"/"} className="link" id="home" title="Home" onClick={this.props.changePage("Home")}>
              <img src={icon} alt="home button/icon" style={{width: "4rem", aspectRatio: 1}} />
            </Link>
            <section className="links">
              <Link to={"/writing"} className="link center" title="Writing" onClick={this.props.changePage("Writing")}>
                &nbsp;Writing
              </Link>
              <Link to={"/websites"} className="link center" title="Websites" onClick={this.props.changePage("Websites")}>
               &nbsp;Websites
              </Link>
              <Link to={"/graphics"} className="link center" title="Graphics" onClick={this.props.changePage("Graphics")}>
                &nbsp;Graphics
              </Link>
              <Link to={"/podcast"} className="link center podcast" title="Podcast" onClick={this.props.changePage("Podcast")}>
                &nbsp;Podcast
              <img src={beacon} alt="beacon/podcasts" style={{width: "4rem"}}  />
              </Link>
            </section>
            <img src={collapse} alt="collapse" id="collapse" style={{width: "2rem"}} onClick={this.props.collapse} tabIndex="0" />
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
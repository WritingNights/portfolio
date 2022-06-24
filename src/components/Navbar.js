import React from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAnim: {},
      expanded: false,
      socials: false,
      topperStyle: {},
      socialStyle: {display: 'none'}
    }

    this.ref = React.createRef();

    this.hoverEffect = this.hoverEffect.bind(this);
    this.hoverStop = this.hoverStop.bind(this);
    this.anchorShift = this.anchorShift.bind(this);
    this.keyPress = this.keyPress.bind(this);

    this.socialShift = this.socialShift.bind(this);
    this.socialPress = this.socialPress.bind(this);
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

  socialShift() {
    const { socials } = this.state;
    this.setState({ socials: !socials });
    const tl = gsap.timeline();
    if (!socials) {
      this.setState({ socialStyle: { display: 'flex' } })
      tl.fromTo('#socials', {opacity: 0}, {opacity: 1, duration: .25});
      tl.fromTo('#twitter', {transform: 'translateY(-45%)', opacity: 0}, {transform: 'translateY(0)', opacity: 1, duration: .15});
      tl.fromTo('#linkedin', {transform: 'translateY(-65%)', opacity: 0}, {transform: 'translateY(0)', opacity: 1, duration: .15});
      tl.fromTo('#github', {transform: 'translateY(-85%)', opacity: 0}, {transform: 'translateY(0)', opacity: 1, duration: .15});
    } else {
      tl.fromTo('#github', {transform: 'translateY(0)', opacity: 1}, {transform: 'translateY(-85%)', opacity: 0, duration: .15});
      tl.fromTo('#linkedin', {transform: 'translateY(0)', opacity: 1}, {transform: 'translateY(-65%)', opacity: 0, duration: .15});
      tl.fromTo('#twitter', {transform: 'translateY(0)', opacity: 1}, {transform: 'translateY(-45%)', opacity: 0, duration: .15});
      tl.fromTo('#socials', {opacity: 1}, {opacity: 0, duration: .25, onComplete: () => this.setState({ socialStyle: {display: 'none'} })});
    }
  }

  socialPress(move) {
    this.setState({ topperStyle: move === 'down' ? { transform: 'scale(.98) translateY(2px)'} : {} })
  }

  componentDidMount() {
    this.setState({ expanded: true });
  }

  render() {
    const { light, mode } = this.props;
    return (
      <div id="navbar">
        {this.state.expanded ? (<div id="nav-left" style={{maxWidth: `calc(100% - ${this.ref.current.offsetWidth}px)`}} className={`${mode}navbar-left`}>
          <div id="closeAnchors" onClick={this.anchorShift} title="Close Nav" tabIndex="0" onKeyUp={this.keyPress}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={this.props.light ? 'black' : 'white'} className="bi bi-chevron-bar-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
            </svg>
          </div>
          <Link to={"/"} className="leftLink" title="About" onMouseOver={this.hoverEffect} onMouseOut={this.hoverStop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={this.props.light ? 'black' : 'white'} className="bi bi-blockquote-left" id="aboutSVG" viewBox="0 0 16 14">
              <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z"/>
            </svg>
            &nbsp;About
          </Link>
          <Link to={"/projects"} className="leftLink" title="Projects" onMouseOver={this.hoverEffect} onMouseOut={this.hoverStop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={light ? 'black' : 'white'} className="bi bi-code-slash" id="projectsSVG" viewBox="0 0 16 14">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
            &nbsp;Projects
          </Link>
          {/*<a href="#skills" className="leftLink" id="skillLink" title="Skills">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={this.props.light ? 'black' : 'white'} className="bi bi-tools" viewBox="0 0 18 14">
              <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
            </svg>
            &nbsp;Skills
          </a>*/}
          <Link to={"/contact"} className="leftLink" title="Contact" onMouseOver={this.hoverEffect} onMouseOut={this.hoverStop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={light ? 'black' : 'white'} className="bi bi-envelope" id="contactSVG" viewBox="0 0 16 14">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg>
            &nbsp;Contact
          </Link>
          <div className={`${mode}mode-container mode-container`}>
            <div onClick={this.props.updateTheme} className={`${mode}toggle toggle`} title="Dark Mode" tabIndex="0" onKeyUp={this.keyPress}>
              {light ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                </svg>
              )}
            </div>
          </div>
        </div>) : (<div id="nav-left" className={`${mode}navbar-left`}>
          <div id="openAnchors" onClick={this.anchorShift} title="Open Nav" tabIndex="0" onKeyUp={this.keyPress}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={light ? 'black' : 'white'} className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        </div>)}
        <div id="nav-right" ref={this.ref}>
          <div className={this.state.socials ? "socialTopper socialActive" : "socialTopper"} style={this.state.topperStyle} onMouseDown={() => this.socialPress('down')} onMouseUp={() => this.socialPress('up')} onClick={this.socialShift} tabIndex="0">
            <div id="socialIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#444" className="bi bi-globe" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
              </svg>
            </div>
            <span>Socials</span>
          </div>
          <div id="socials" style={this.state.socialStyle}>
            <a href="https://twitter.com/the_left_half" target="_blank" rel="noreferrer" id="twitter" title="Twitter" tabIndex="0">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#55acee" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/daniel-jones-91a279168/" target="_blank" rel="noreferrer" id="linkedin" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0e76a8" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
            <a href="https://github.com/WritingNights" target="_blank" rel="noreferrer" id="github" title="Github">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
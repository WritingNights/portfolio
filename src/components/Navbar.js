import React from "react";
import { Link } from "react-router-dom";
import collapse from "./icons/Collapse.png";
import collapseD from "./icons/CollapseD.png";
import icon from "./icons/Icon.png";
//import beacon from "./icons/Beacon.png";

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

    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      if (e.target.id === 'collapse' || e.target.id === 'collapseClose') {
        this.props.collapse();
      }
    }
  }

  render() {
    const { collapsed, fixed } = this.props;
    if (collapsed) {
      return (<div id="collapseDiv">
        <img src={collapseD} alt="collapse" id="collapseClose" style={{width: "2rem", cursor: "pointer"}} onClick={this.props.collapse} onKeyDown={this.keyPress} tabIndex="0" />
      </div>);
    } else {
      const { updatePage } = this.props;
      return (
        <div id="navbar" className={`${fixed ? 'fixed' : 'stuck'}`}>
          <div id="newLinks">
            <Link to={"/"} className="link" id="home" title="Home" onClick={() => updatePage("home")} tabIndex="0">
              <img src={icon} alt="home button/icon" style={{width: "3rem", aspectRatio: 1}} />
            </Link>
            <section className="links">
              {/*<Link to={"/writing"} className={`${window.location.pathname.split('/')[1] === 'writing' ? 'activeLink' : ''} link center`} title="Writing" onClick={() => updatePage("writing")} tabIndex="0">
                &nbsp;Writing
              </Link>*/}
              <Link to={"/websites"} className={`${window.location.pathname.split('/')[1] === 'websites' ? 'activeLink' : ''} link center`} title="Websites" onClick={() => updatePage("websites")} tabIndex="0">
               &nbsp;Websites
              </Link>
              <Link to={"/graphics"} className={`${window.location.pathname.split('/')[1] === 'graphics' ? 'activeLink' : ''} link center`} title="Graphics" onClick={() => updatePage("graphics")} tabIndex="0">
                &nbsp;Graphics
              </Link>
              {/*<Link to={"/podcast"} className={`${window.location.pathname.split('/')[1] === 'podcast' ? 'activeLink' : ''} link center podcast`} title="Podcast" onClick={() => updatePage("podcast")} tabIndex="0">
                &nbsp;Podcast
              <img src={beacon} alt="beacon/podcasts" style={{width: "4rem"}}  />
              </Link>*/}
            </section>
            <img src={collapse} alt="collapse" id="collapse" style={{width: "2rem"}} onClick={this.props.collapse} onKeyDown={this.keyPress} tabIndex="0" />
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
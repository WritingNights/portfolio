import React from "react";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: null,
      focus: null
    };
  }

  render() {
    const projects = this.props.data.projects.filter(
        obj => this.state.filter ? obj.tools.includes(this.state.filter) : obj
      ).map((obj, i) => {
        return (<div key={i} className="projectCard" onClick={() => this.setState({ focus: obj })} tabIndex="0">
          <div className="invisibleProject">
            <strong>{obj.title}</strong>
          </div>
          <div className="visibleProject"><img src={obj.image} alt={obj.title} title={obj.title}/></div>
        </div>);
      });

    const bigStyle = this.state.focus ? { zIndex: 45 } : { zIndex: -1 };
    const { focus } = this.state;

    return (<section id="projects2" className="newProjects">
      <div className="projectsWrapper">
        <div className="filterWrapper">
          {this.props.data.skills.map((obj, i) => {
            return (
              <button key={i} className="filterButton" style={this.state.filter === obj.skill ? {backgroundColor: '#00000044'} : {}} onClick={() => this.setState({ filter: obj.skill })}>{obj.skill}</button>
            );
          })}
          <button className="filterButton" onClick={() => this.setState({ filter: null })}>Reset</button>
        </div>
        <div className="projectsDisplay">
          {projects.length > 0 ? projects : <div>Nothing found in portfolio</div>}
        </div>
      </div>
      {this.props.projectSwitch}
      <div className="biggerProject" onClick={() => this.setState({ focus: null })} style={bigStyle}>
        {focus ? <div className="biggerCard">
          <h2>{focus.title}</h2>
          <div className="midBig">
            <div className="new-pro-links">
              {focus.youtubeLink ? <a href={focus.youtubeLink} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
              </a> : ''}
              {focus.gitLink ? <a href={focus.gitLink} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a> : ''}
            </div>
            <img src={focus.image} alt={focus.title} title="Click for full image" onClick={() => this.props.data.updateImg(focus.image, focus.title)}/>
          </div>
          <div className="newBottom">
            {focus.description.map((obj, j) => {
              return (<p key={j}>{obj}</p>);
            })}
          </div>
        </div> : ('')}
      </div>
      <div className="newFullImg" onClick={() => this.props.data.updateImg('','')} style={this.props.data.style}><img src={this.props.data.currentImg} alt={this.props.data.currentAlt}/></div>
    </section>);
  }
}

export default Projects;
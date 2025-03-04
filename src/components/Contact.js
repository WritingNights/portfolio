import React from "react";
import face from "./firstProjectPhoto.jpg";
import aboutMe from "./data/sellMe-data";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.ref = React.createRef();

    this.encode = this.encode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <section id="Contact" className={`${this.props.collapsed ? 'no-' : ''}manager`}>
        <div className="bar1"/>
        <div className="bar2"/>
        <article className="contactArt">
          <div className="conImg">
            <img src={face} alt="me"/>
            <h2>Hire Me</h2>
          </div>
          <div className="textCont" style={this.props.mode === 'dark-' ? { color: 'white' } : {}}>
            {aboutMe}
          </div>
          <div className="hireFormDiv">
            <form netlify="true" name="contact" onSubmit={this.handleSubmit} className="hireForm">
              <div className="formInputs">
                <div className="conInp">
                  <label htmlFor="message">Message</label>
                  <textarea type="text" id="message" name="message" onChange={(e) => this.setState({ message: (e.target.value) })} value={this.state.message} />
                </div>
                <section>
                  <div className="conInp">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={(e) => this.setState({ name: (e.target.value) })} value={this.state.name} required/>
                  </div>
                  <div className="conInp">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={(e) => this.setState({ email: (e.target.value) })} value={this.state.email} required/>
                  </div>
                  <button type="submit">Hire</button>
                </section>
              </div>
            </form>
          </div>
        </article>
      </section>
    );
  };
}

export default Contact;
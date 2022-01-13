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
        }

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
            <section id="contact" className={`${this.props.mode}contact`}>
                <article className="contactArt">
                    <div className="conImg">
                        <img src={face} alt="me"/>
                    </div>
                    <div className="hireFormDiv">
                        <h2 style={this.props.mode === 'dark-' ? {color: 'white', borderBottom: '1px solid white'} : {}}>Hire Me</h2>
                        <form netlify="true" name="contact" onSubmit={this.handleSubmit} className="hireForm">
                            <div className="left-body">
                                {aboutMe}
                            </div>
                            <div className="formInputs">
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" onChange={(e) => this.setState({ name: (e.target.value) })} value={this.state.name} required/>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" onChange={(e) => this.setState({ email: (e.target.value) })} value={this.state.email} required/>
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea type="text" id="message" name="message" onChange={(e) => this.setState({ message: (e.target.value) })} value={this.state.message} />
                                </div>
                                <button type="submit">Hire</button>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        );
    };
}

export default Contact;
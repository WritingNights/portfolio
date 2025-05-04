import React from 'react';
import { Link } from 'react-router-dom';

class  NetNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: ''
    }
  }
  render() {
    return (
      <header className={(this.props.menu ? 'network-open' : 'network-closed') + " network-header"}>
        <Link to={"/websites"} title="back" className="network-back" tabIndex="0">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="current-color" id="page-back" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
        </Link>
        <section className="network-links">
          <textarea placeholder="Post" value={this.state.post} onChange={e => this.setState({ post: e.target.value })} style={this.state.post.length > 0 ? { height: "15rem", border: "1px solid white", transition: ".5s ease" } : {}}></textarea>
          <button style={{display: `${this.state.post.length > 0 ? 'block' : 'none'}`}} onClick={() => {this.props.postPost(this.state.post); this.setState({ post: '' })}}>Post</button>
          <span>Home</span>
          <span>Profile</span>
          <span>Network Blue</span>
        </section>
      </header>
    );
  }
}

export default NetNav;
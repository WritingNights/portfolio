import React from 'react';
import './Network/network.css';
import moment from 'moment';

import NetNav from "./Network/NetNav.js";
import NetPost from "./Network/NetPost.js";

import fakePosts from "./Network/posts.js";

class Network extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      menu: false
    };

    this.postPost = this.postPost.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  postPost(post) {
    const newPost = {
      user: 'you',
      post: post,
      date: moment()
    }

    let posts = this.state.posts
    posts.push(newPost);

    this.setState({ posts: posts });
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.setState({ menu: !this.state.menu });
    }
  }

  render() {
    const { posts } = this.state;

    return (<div id="networkApp">
      <div className="network-menu" tabIndex="0" onClick={() => this.setState({ menu: !this.state.menu })} onKeyDown={this.handleKeyPress}>{this.state.menu ? 'X' : '>'}</div>
      <NetNav postPost={this.postPost} menu={this.state.menu} />
      <main>
        {posts.map((obj, i) => <NetPost data={obj} key={i} />)}
        {fakePosts.map((obj, i) => <NetPost data={obj} fake={true} key={i} />)}
      </main>
    </div>);
  }
}

export default Network;
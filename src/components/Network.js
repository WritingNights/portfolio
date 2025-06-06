import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Network/network.css';
import moment from 'moment';

import NetNav from "./Network/NetNav.js";
import NetHome from "./Network/NetHome.js";
import NetProfile from './Network/NetProfile.js';
import NetBlue from './Network/NetBlue.js';
import NetHistory from './Network/NetHistory.js';


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
        <Routes>
          <Route path={""} element={<NetHome posts={posts} fakePosts={fakePosts} />} />
          <Route path={"profile"} element={<NetProfile posts={posts} />} />
          <Route path={"net-blue"} element={<NetBlue />} />
          <Route path={"history"} element={<NetHistory />} />
        </Routes>
      </main>
    </div>);
  }
}

export default Network;
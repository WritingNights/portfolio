import React from 'react';
import './Network/network.css';
import { Link } from 'react-router-dom';

import NetNav from "./Network/NetNav.js";

class Network extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (<div id="networkApp">
      <NetNav />
      <main>

      </main>
    </div>);
  }
}

export default Network;
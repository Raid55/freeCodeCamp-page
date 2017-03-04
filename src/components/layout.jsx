import React, { Component } from 'react';
import { Link } from 'react-router'

export default class extends Component {
  render() {
    return (
      <div className="layout">
        <Link to={`/`}>
          <div id="mainBar">Raid55's Free Camping Ground</div>
        </Link>
        <main>
          {this.props.children}
        </main>
        <footer>
          (batteries not included)
        </footer>
      </div>
    );
  }
}

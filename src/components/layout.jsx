import React, { Component } from 'react';
import { Link } from 'react-router'

export default class extends Component {
  render() {
    return (
      <div className="layout">
        <Link to={`/`}>
          <div id="mainBar">Mao Zedong Git Search Directory</div>
        </Link>
        <main>
          {this.props.children}
        </main>
        <footer>
          The Happy Dictators Company / All rights reserved by force if not willfully given. Any and all property, intelectual or not, belongs to the Great State of Mao Zedong. (batteries not included)
        </footer>
      </div>
    );
  }
}

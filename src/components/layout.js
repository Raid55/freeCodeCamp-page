import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className="layout">
        <div id="mainBar">Mao Zedong Git Search Directory</div>
        <main>
          {this.props.children}
        </main>
        <footer>
          The Happy Dictator Company / All rights reserved by force if not willfully given. Any and all property, intelectual or not, belongs to the Great State of Mao Zedong. (batteries not included)
        </footer>
      </div>
    );
  }
}

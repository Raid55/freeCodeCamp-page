import React, { Component } from 'react';
import Layout from './components/layout.js'
import { Router, Route, Link, browserHistory } from 'react-router'

import './css/App.css';

class App extends Component {
  state ={
    username:"",
    maxChar: 39
  }
  handleChange= () => {
    this.setState({username: this.refs.username.value.substr(0, this.state.maxChar)})
  }
  render() {
    return (
      <div className="App">
        <Layout>
          {this.props.children ? this.props.children :
          <div>
            <input className="searchBox" type="text" value={this.state.username} ref="username" onChange={this.handleChange}/>
            <Link to={`/user/${this.state.username}`}>
              <input className="searchBtn" type='button' value="Search"/>
            </Link>
          </div>}
        </Layout>

      </div>
    );
  }
}

export default App;

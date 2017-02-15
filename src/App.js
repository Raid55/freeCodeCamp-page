import React, { Component } from 'react';
import Layout from './components/layout.jsx'

import './css/App.css';

export default class extends Component {
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
          {this.props.children}
        </Layout>
      </div>
    );
  }
}

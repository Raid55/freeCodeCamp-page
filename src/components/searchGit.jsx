import React, { Component } from 'react';
import { Link } from 'react-router'


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
      <div>
        <h3>Search for github user and get his profile and stuff</h3>
        <input className="searchBox" type="text" value={this.state.username} ref="username" onChange={this.handleChange}/>
        <Link to={`/github/${this.state.username}`}>
          <input className="searchBtn" type='button' value="Search"/>
        </Link>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

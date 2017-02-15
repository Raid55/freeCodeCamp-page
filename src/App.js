import React, { Component } from 'react';
import Layout from './components/layout.jsx'
import { Link } from 'react-router'
import mao from '../public/mao-mao.jpg'

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
            <div>
              <a href="https://en.wikipedia.org/wiki/Mao_Zedong">
                <img id="maomao" src={mao} alt=""/>
              </a>
            </div>
          </div>}
        </Layout>
      </div>
    );
  }
}

export default App;

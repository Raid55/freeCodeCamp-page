import React, { Component } from 'react';
import Layout from './components/layout.jsx'
import Tabs from './components/tabs.jsx'

import './css/App.css';

export default class extends Component {
  state ={
  }
  
  render() {
    return (
      <div className="App">
        <Layout>
          <Tabs>
            {this.props.children}
          </Tabs>
        </Layout>
      </div>
    );
  }
}

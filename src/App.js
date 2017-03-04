import React, { Component } from 'react';
import Layout from './components/layout.jsx'
import Tabs from './components/tabs.jsx'

import theme from '../assets/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

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

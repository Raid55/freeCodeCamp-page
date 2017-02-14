import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Repos from './components/repos.js';
import Following from './components/following.js';
import Followers from './components/followers.js';
import Userpage from './components/user.js';
import { Router, Route, Link, browserHistory } from 'react-router'

import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="user/:username" component={Userpage}>
        <Route path="repos" component={Repos}/>
        <Route path="followers" component={Followers}/>
        <Route path="folowing" component={Following}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Repos from './components/repos.jsx';
import Following from './components/following.jsx';
import Followers from './components/followers.jsx';
import Userpage from './components/user.jsx';
import { Router, Route, browserHistory } from 'react-router'

import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="user/:username" component={Userpage}>
        <Route path="repos" component={Repos}/>
        <Route path="followers" component={Followers}/>
        <Route path="following" component={Following}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

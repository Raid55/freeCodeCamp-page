import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Repos from './components/repos.jsx';
import Following from './components/following.jsx';
import Followers from './components/followers.jsx';
import UserpageGit from './components/userGit.jsx';
import TwitchFeat from './components/twitchFeatured.jsx';
import GitSearch from './components/searchGit.jsx';
import UserTwitch from './components/twitchUserPage.jsx';
import Home from './components/home.jsx';
import Calc from './components/calculator.jsx';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="calculator" component={Calc}/>
      <Route path="twitch" component={TwitchFeat}>
        <Route path=":username" component={UserTwitch}/>
      </Route>
      <Route path="github" component={GitSearch}>
        <Route path=":username" component={UserpageGit}>
          <Route path="repos" component={Repos}/>
          <Route path="followers" component={Followers}/>
          <Route path="following" component={Following}/>
        </Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

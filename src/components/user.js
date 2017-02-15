import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

export default class extends Component {
  state={
    err: false
  }

  componentDidMount(){
    const username = this.props.params.username
    const that = this
    fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}`)
    .then(function(response) {
      if (response.status === 200) {
        return response;
      }else{
        throw new Error(response.statusText);
      }
    })
    .then(result => result.json())
    .then(function(gitJson){
      if(gitJson.message){
        that.setState({err: true})
      }else{
        that.setState({
          username: gitJson.login,
          photo: gitJson.avatar_url,
          bio: gitJson.bio,
          blog: gitJson.blog,
          repos: gitJson.public_repos,
          followers: gitJson.followers,
          following: gitJson.following
        })
      }
    })
    .catch(function(err){
        that.setState({err: true})
    })
  }
  render(){
    const {photo,username,bio,blog,err,repos,followers,following} = this.state
    if(err === false){
      return (
        <div>
          <div className="profileBox">
            <img className="userpic" src={ photo } alt=""/>
            <div className="profileInfo">
              <div id="username">{ username }</div>
              <div className="contentGit">{ bio }</div>
              <div className="contentGit">{ blog }</div>
            </div>
            <div className="profileStats">
              <Link to={`/user/${this.state.username}/repos`}>
                <div>
                  <p>{ repos }</p>
                  <p>repos</p>
                </div>
              </Link>
              <Link to={`/user/${this.state.username}/followers`}>
                <div>
                  <p>{ followers }</p>
                  <p>Followers</p>
                </div>
              </Link>
              <Link to={`/user/${this.state.username}/following`}>
                <div>
                  <p>{ following }</p>
                  <p>following</p>
                </div>
              </Link>
            </div>
          </div>
          {this.props.children}
        </div>
      )
    }else{
      return (
        <div className="profileBox">
          <div>ERROR 55...HUNDRED pls consult a consultant and then the manual and then check that reality is still glued together</div>
        </div>
      )
    }
  }
}

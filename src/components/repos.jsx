import React, { Component } from 'react';
// import { Router, Route, Link, browserHistory } from 'react-router'

export default class extends Component {
  state={
    err:false
  }
  componentDidMount(){
    const username = this.props.params.username
    const that = this
    fetch(`https://api.github.com/users/${username}/repos`)
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
          reposArr: gitJson,
          username: username
        })
      }
    })
    .catch(function(err){
        that.setState({err: true})
    })
  }

  render(){
    const {username,reposArr} = this.state
    if(!reposArr){
      return (
        <div>
          LOADING...
        </div>
      )
    }else if(this.state.err === true){
      return (
        <div>
          TWAS THE NIGHT BEFORE X-MAS AND AN ERROR WAS FOUND UNDER THE MISTELTOES... yea the misteltoes...
        </div>
      )
    }else{
      return (
        <div>
          <div>{username}'s Repos</div>
          { reposArr.map((el) =>
          <div>
            <a className="reposList" href={el.html_url} target="_blank">
              <div>{ el.full_name } <span className="starGazzer"> Stars: { el.stargazers_count }</span></div>
            </a>
            <hr/>
          </div>
          ) }
        </div>
      )
    }
  }
}

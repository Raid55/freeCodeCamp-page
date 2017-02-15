import React, { Component } from 'react';
import { Link } from 'react-router'

export default class extends Component {
  state={
    err:false
  }
  componentDidMount(){
    const username = this.props.params.username
    const that = this
    fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}/followers`)
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
          followersArr: gitJson,
          username: username
        })
      }
    })
    .catch(function(err){
        that.setState({err: true})
    })
  }

  render(){
    const {username,followersArr} = this.state
    if(!followersArr){
      return (
        <div>
          LOADING...WAIT YOU IMPATIENT FU....
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
          <div>{username} is Followed by:</div>
          { followersArr.map((el) =>
            <Link to={`/user/${el.login}`}>
              <div><img className="ffImages" src={ el.avatar_url } alt=""/><span>{ el.login }</span></div>
            </Link>
          ) }
        </div>
      )
    }
  }
}

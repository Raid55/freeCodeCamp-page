import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-toolbox/lib/button';



export default class extends Component {
  // state ={
  //
  // }

  // componentWillMount(){
  //
  // }
  //
  // handleChange = () => {
  //   this.setState({username: this.refs.username.value.substr(0, this.state.maxChar)})
  // }

  render() {
    return(
      <div>
        <div ></div>
        <span >
          <Button floating>1</Button>
          <Button floating>2</Button>
          <Button floating>3</Button>
          <Button floating>4</Button>
          <Button floating>5</Button>
          <Button floating>6</Button>
          <Button floating>7</Button>
          <Button floating>8</Button>
          <Button floating>9</Button>
          <Button floating>0</Button>
        </span>
        <span ></span>
      </div>
    )
  }
}
// className="output"
// className="numberPad"
// className="operators"

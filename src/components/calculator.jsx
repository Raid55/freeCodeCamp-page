import React, { Component } from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class extends Component {
  state = {
    calcOutput: "",
    totalOperation: []
  }

  // componentWillMount(){
  //
  // }
  //
  handleNumber = (number) => {
    let numArr = [number]
    this.setState({
      numberHolder: this.state.totalOperation.concat(numArr) ,
      calcOutput: number
    })
  }
  

  render() {
    return(
      <div>
        <input type="text" value={this.state.calcOutput} id="calcOutput"/>
        <span>
          <MuiThemeProvider>
            <FloatingActionButton mini={true}>
              1
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true}>
              2
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true}>
              3
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true}>
              4
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true}>
              5
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true}>
              6
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true}>
              7
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true}>
              8
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true}>
              9
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true}>
              0
            </FloatingActionButton>
          </MuiThemeProvider>
        </span>
        <span>
          <MuiThemeProvider>
            <RaisedButton label="+"/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="-"/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="/"/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="*"/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="="/>
          </MuiThemeProvider>
        </span>
      </div>
    )
  }
}
// className="output"
// className="numberPad"
// className="operators"

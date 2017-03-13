import React, { Component } from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class extends Component {
  state = {
    calcOutput: "",
    oppSlot: "",
    numSlot: "",
    accu: 0
  }

  // componentWillMount(){
  //
  // }
  //
  handleNumber = (num) => {
    this.setState({
      numSlot: this.state.numSlot + num
    });
  }

  handleOpp = (opp) => {
    const { oppSlot, numSlot, accu, calcOutput } = this.state
    if(oppSlot === ""){
      this.setState({
        numSlot: "",
        accu: Number(numSlot),
        oppSlot: opp,
        calcOutput: calcOutput + " " + opp
      });
    }else if(numSlot !== "" && oppSlot !== ""){
      switch(oppSlot) {
        case "+":
          let tempAccu = accu - Number(numSlot)
          this.setState({
            numSlot: "",
            accu: tempAccu,
            oppSlot: "",
            calcOutput: accu
          });
          break;
        case "-":
          let tempAccu = accu - Number(numSlot)
          this.setState({
            numSlot: "",
            accu: tempAccu,
            oppSlot: "",
            calcOutput: tempAccu
          });
          break;
        case "*":
          let tempAccu = accu - Number(numSlot)
          this.setState({
            numSlot: "",
            accu: tempAccu,
            oppSlot: "",
            calcOutput: tempAccu
          });
          break;
        case "/":
          let tempAccu = accu - Number(numSlot)
          this.setState({
            numSlot: "",
            accu: tempAccu,
            oppSlot: "",
            calcOutput: tempAccu
          });
          break;
        default:
          this.setState({
            calcOutput: "error with that things of the syntax"
          });
      }
    }else{
      console.log("error ERROR SYNTAXICALS ERRORS")
      this.setState({
        calcOutput: "ERROR ERROR ERROR BITCH"
      });
    }
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

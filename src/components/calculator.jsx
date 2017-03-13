import React, { Component } from 'react';
// import { Link } from 'react-router';
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

  handleNumber = (num) => {
    const { numSlot, calcOutput } = this.state
    this.setState({
      numSlot: numSlot + num,
      calcOutput: calcOutput + num
    });
  }

  handleOpp = (opp) => {
    let tempAccu = 0;
    const { oppSlot, numSlot, accu, calcOutput } = this.state
    if(oppSlot === "" && opp !== "="){
      this.setState({
        numSlot: "",
        accu: Number(numSlot),
        oppSlot: opp,
        calcOutput: calcOutput + " " + opp + " "
      });
    }else if(numSlot !== "" && oppSlot !== ""){
      switch(oppSlot) {
        case "+":
          tempAccu = accu + Number(numSlot);
          break;
        case "-":
          tempAccu = accu - Number(numSlot);
          break;
        case "*":
          tempAccu = accu * Number(numSlot);
          break;
        case "/":
          tempAccu = accu / Number(numSlot);
          break;
        default:
          this.setState({
            calcOutput: "error with that things of the syntax"
          });
          break;
      }
      this.setState({
        numSlot: "",
        accu: tempAccu,
        oppSlot: opp,
        calcOutput: tempAccu
      });
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
        <div>
          <input type="text" value={this.state.calcOutput} id="calcOutput"/>
        </div>
        <span>
          <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={() => this.handleNumber("1") }>
              1
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={() => this.handleNumber("2") }>
              2
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={() => this.handleNumber("3") }>
              3
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={() => this.handleNumber("4") }>
              4
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={() => this.handleNumber("5") }>
              5
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={() => this.handleNumber("6") }>
              6
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={() => this.handleNumber("7") }>
              7
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={() => this.handleNumber("8") }>
              8
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={() => this.handleNumber("9") }>
              9
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <FloatingActionButton mini={true} onClick={() => this.handleNumber("0") }>
              0
            </FloatingActionButton>
          </MuiThemeProvider>
        </span>
        <span>
          <MuiThemeProvider>
            <RaisedButton label="+" onClick={() => this.handleOpp("+")}/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="-" onClick={() => this.handleOpp("-") }/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="/" onClick={() => this.handleOpp("/") }/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="*" onClick={() => this.handleOpp("*") }/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="=" onClick={() => this.handleOpp("=") }/>
          </MuiThemeProvider>
        </span>
      </div>
    )
  }
}
// className="output"
// className="numberPad"
// className="operators"

import React, { Component } from 'react';
import { Tab, Tabs } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

const blueTab = {
  backgroundColor: "rgb(0, 97, 212)",
}

export default class extends Component {
  state ={
  };

  render() {
    return (
      <div >
        <h1
          style={{
            fontWeight: "900",
            fontSize: "3.5em",
            textAlign: "center",
            color: "rgb(232, 139, 15)",

          }}
        >Choose a Tab</h1>
        <MuiThemeProvider>
          <Tabs>
            <Tab containerElement={<Link to="/"/>} style={blueTab} label="Home">

            </Tab>
            <Tab containerElement={<Link to="/github"/>} style={blueTab} label="Github Search">

            </Tab>
            <Tab containerElement={<Link to="/twitch"/>} style={blueTab} label="Twitch Status">

            </Tab>
            <Tab containerElement={<Link to="/"/>} style={blueTab} label="lol">
              lol
            </Tab>
          </Tabs>
        </MuiThemeProvider>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

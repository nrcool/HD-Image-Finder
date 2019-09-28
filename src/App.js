import React, { Component } from 'react';
import "./App.css";
import Navbar from "./component/navbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./component/search";


export default class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div style={{position:"relative"}}>
        <Navbar/>
        <Search/>
      </div>
      </MuiThemeProvider>
    )
  }
}


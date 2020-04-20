import React, { Component } from "react";
import axios from "axios";
import { fetchSmurfs } from "../actions/index";
import "./App.css";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfsForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;

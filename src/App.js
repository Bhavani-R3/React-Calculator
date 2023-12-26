import React, { Component } from "react";
import "./App.css"
import Calculator from "./component/Calculator";

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1 className="txt">React Calculator</h1>
          <Calculator/>
        </div>
      </div>
    )
  }
}

export default App
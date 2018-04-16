import React, { Component, Fragment } from "react";
import { MyContext } from "../Provider";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            {!ctx.state.title && ctx.updateTitle("Statistics")}
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default App;

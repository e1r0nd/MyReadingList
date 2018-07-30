import React, { Component } from "react";
import "./Shade.css";
import { MyContext } from "../Provider";

class Shade extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <div className={`shade ${ctx.state.shaded}`}>
            <div className="shade__el-one" />
            <div className="shade__el-two" />
            <div className="shade__el-three" />
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Shade;

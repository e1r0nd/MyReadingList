import React, { Component, Fragment } from "react";
import { MyContext } from "../Provider";
import "./Stats.css";

class Stats extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            {!ctx.state.title && ctx.updateTitle("Statistics")}
            <div>Stats</div>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Stats;

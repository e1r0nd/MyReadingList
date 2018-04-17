import React, { Component } from "react";
import { MyContext } from "../Provider";

class Login extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <button
            className="btn-flat"
            aria-label="login or logout"
            role="presentation"
            onClick={ctx.LogInOut}
          >
            {ctx.state.uid ? "Logout" : "Login"}
          </button>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Login;

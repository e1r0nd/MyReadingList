import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import { MyContext } from "../Provider";

class Modal extends Component {
  static propTypes = {
    action: PropTypes.func
  };

  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <div
            className={`modal${ctx.state.modal.show ? " modal--visible" : ""}`}
          >
            <div
              role="dialog"
              aria-labelledby="dialogTitle"
              className="modal__container"
            >
              <h3 id="dialogTitle">{ctx.state.modal.title}</h3>
              <div>
                <button onClick={this.props.action}>
                  {ctx.state.modal.action}
                </button>
                <button onClick={ctx.hideModal}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Modal;

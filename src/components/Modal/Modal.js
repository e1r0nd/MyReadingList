import React, { Component } from "react";
import "./Modal.css";
import { MyContext } from "../Provider";

class Modal extends Component {
  handleAction = (e, ctx) => {
    e.preventDefault();
    switch (ctx.state.modal.action) {
      case "Remove":
        ctx.removeBook(ctx.state.currentIndex);
        ctx.hideModal();
        ctx.setCurrentBook();
        ctx.state.modal.hideForm();
        break;
      default:
        break;
    }
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
              <div className="form__btns">
                <button
                  onClick={e => this.handleAction(e, ctx)}
                  className="btn-flat btn-flat--danger form__btn"
                >
                  {ctx.state.modal.action}
                </button>
                <button onClick={ctx.hideModal} className="btn-flat form__btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Modal;

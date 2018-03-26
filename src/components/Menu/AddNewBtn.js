import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";

class AddNewBtn extends Component {
  static propTypes = {
    showSideNav: PropTypes.func,
    element: PropTypes.object,
    componentName: PropTypes.string,
    context: PropTypes.object
  };

  componentDidUpdate() {
    const { context, element, componentName, showSideNav } = this.props;
    if (context && context.state[componentName]) {
      showSideNav(element);
      context.setSideNav(componentName, false);
    }
  }
  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            <button
              id="addNewShow"
              onClick={() =>
                this.props.showSideNav(
                  this.props.element,
                  ctx,
                  this.props.componentName
                )
              }
              aria-label="show add new form"
              role="presentation"
              className="header__menu-toggle u--pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#ffffff" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </button>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default AddNewBtn;

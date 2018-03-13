import React, { Component } from "react";
import propTypes from "prop-types";

class BurgerBtn extends Component {
  static propTypes = {
    showSideNav: propTypes.func
  };

  render() {
    return (
      <button
        id="menuShow"
        onClick={this.props.showSideNav}
        aria-label="show menu"
        role="presentation"
        className="header__menu-toggle u--pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </svg>
      </button>
    );
  }
}

export default BurgerBtn;

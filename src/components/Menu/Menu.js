import React, { Component, Fragment } from "react";
import propTypes from "prop-types";
import MenuItem from "./MenuItem";

class Menu extends Component {
  render() {
    return (
      <Fragment>
        <aside id="sideNav" className="side-nav">
          <nav id="sideNavContainer" className="side-nav__container">
            <button
              id="menuHide"
              aria-label="hide menu"
              role="presentation"
              className="side-nav__hide u--pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59
              12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </button>
            <div className="side-nav__mock-bg">
              <header className="side-nav__header">
                <span id="coverTitle">Rainy night</span>
                <button
                  id="muteBtn"
                  className="mute-btn"
                  data-muted="false"
                  aria-label="mute or unmute"
                  role="presentation"
                >
                  Login/Logout
                </button>
              </header>
            </div>
            <ul className="side-nav__content">
              {this.props.menu.items.map((x, i) => (
                <MenuItem
                  key={i}
                  details={x}
                  selected={this.props.menu.selected}
                  index={i}
                />
              ))}
            </ul>
          </nav>
        </aside>
      </Fragment>
    );
  }
}

Menu.propTypes = {
  menu: propTypes.object
};
export default Menu;

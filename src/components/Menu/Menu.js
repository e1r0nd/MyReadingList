import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.object,
    sideNavEl: PropTypes.object,
    hideSideNav: PropTypes.func
  };

  showButtonEl = React.createRef();
  hideButtonEl = React.createRef();
  sideNavContainerEl = React.createRef();

  blockClicks = evt => {
    evt.stopPropagation();
  };

  onTouchStart = evt => {
    if (!this.props.sideNavEl.value.classList.contains("side-nav--visible")) {
      return;
    }

    this.startX = evt.touches[0].pageX;
    this.currentX = this.startX;

    this.touchingSideNav = true;
    requestAnimationFrame(this.update);
  };

  onTouchMove = evt => {
    if (!this.touchingSideNav) {
      return;
    }

    this.currentX = evt.touches[0].pageX;
  };

  onTouchEnd = () => {
    if (!this.touchingSideNav) {
      return;
    }

    this.touchingSideNav = false;

    const translateX = Math.min(0, this.currentX - this.startX);
    this.sideNavContainerEl.value.style.transform = "";

    if (translateX < 0) {
      this.props.hideSideNav();
    }
  };

  update = () => {
    if (!this.touchingSideNav) {
      return;
    }

    requestAnimationFrame(this.update.bind(this));

    const translateX = Math.min(0, this.currentX - this.startX);
    this.sideNavContainerEl.value.style.transform = `translateX(${translateX}px)`;
  };

  render() {
    return (
      <Fragment>
        <aside
          id="sideNav"
          className="side-nav"
          ref={this.props.sideNavEl}
          onClick={this.props.hideSideNav}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
        >
          <nav
            id="sideNavContainer"
            className="side-nav__container"
            ref={this.sideNavContainerEl}
            onClick={this.blockClicks}
          >
            <button
              id="menuHide"
              onClick={this.props.hideSideNav}
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
                  className=""
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

export default Menu;

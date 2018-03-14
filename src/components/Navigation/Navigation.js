import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./Navigation.css";
import Menu from "../Menu/Menu";
import BurgerBtn from "../Menu/BurgerBtn";

class Navigation extends Component {
  // static propTypes = {
  //   books: PropTypes.object.isRequired,
  //   bookService: PropTypes.object,
  //   uid: PropTypes.string.isRequired,
  //   userName: PropTypes.string.isRequired,
  //   userService: PropTypes.object
  // };

  menu = {
    selected: 0,
    items: [
      {
        title: "1",
        link: "/page/2",
        icon: "3",
        className: "4"
      },
      {
        title: "10",
        link: "/page/20",
        icon: "30",
        className: "40"
      }
    ]
  };
  sideNavEl = React.createRef();
  sideNavTitle = React.createRef();

  showSideNav = () => {
    this.sideNavEl.value.classList.add("side-nav--animatable");
    this.sideNavEl.value.classList.add("side-nav--visible");
    this.sideNavEl.value.addEventListener(
      "transitionend",
      this.onTransitionEnd
    );
  };

  hideSideNav = () => {
    this.sideNavEl.value.classList.add("side-nav--animatable");
    this.sideNavEl.value.classList.remove("side-nav--visible");
    this.sideNavEl.value.addEventListener(
      "transitionend",
      this.onTransitionEnd
    );
  };

  onTransitionEnd = e => {
    if ("transform" === e.propertyName) {
      this.sideNavEl.value.classList.remove("side-nav--animatable");
      this.sideNavEl.value.removeEventListener(
        "transitionend",
        this.onTransitionEnd
      );
    }
  };

  render() {
    return (
      <header>
        <div className="header">
          <BurgerBtn showSideNav={this.showSideNav} />
          <span ref={this.sideNavTitle} className="side-nav__title">
            Books
          </span>
        </div>
        <Menu
          // {...this.props}
          menu={this.menu}
          hideSideNav={this.hideSideNav}
          sideNavEl={this.sideNavEl}
        />
      </header>
    );
  }
}

export default Navigation;

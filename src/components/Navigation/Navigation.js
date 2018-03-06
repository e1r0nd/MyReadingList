// import React from "react";
import React, { Component } from "react";
import "./Navigation.css";
import Menu from "../Menu/Menu";
import BurgerBtn from "../Menu/BurgerBtn";

class Navigation extends Component {
  menu = {
    selected: 0,
    items: [
      {
        title: "1",
        link: "2",
        icon: "3",
        className: "4"
      },
      {
        title: "10",
        link: "20",
        icon: "30",
        className: "40"
      }
    ]
  };
  sideNavEl = React.createRef();

  showSideNav = () => {
    console.log("show", this.sideNavEl);
    this.sideNavEl.value.classList.add("side-nav--animatable");
    this.sideNavEl.value.classList.add("side-nav--visible");
    this.sideNavEl.value.addEventListener(
      "transitionend",
      this.onTransitionEnd
    );
  };

  hideSideNav = () => {
    console.log("hide", this.sideNavEl);
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
          <span id="sideNavTitle" className="side-nav__title">
            Books
          </span>
        </div>
        <Menu
          menu={this.menu}
          hideSideNav={this.hideSideNav}
          sideNavEl={this.sideNavEl}
        />
      </header>
    );
  }
}

export default Navigation;

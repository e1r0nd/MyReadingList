import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./Navigation.css";
// import Menu from "../Menu/Menu";
import SideNav from "../Menu/SideNav";
import BurgerBtn from "../Menu/BurgerBtn";
import AddNewBtn from "../Menu/AddNewBtn";

class Navigation extends Component {
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
  addNewEl = React.createRef();
  sideNavTitle = React.createRef();

  showSideNav = el => {
    el.value.classList.add("side-nav--animatable");
    el.value.classList.add("side-nav--visible");
    el.value.addEventListener("transitionend", this.onTransitionEnd);
  };

  onTransitionEnd = e => {
    if ("transform" === e.propertyName) {
      const target = document.querySelector(".side-nav--animatable");

      if (target) {
        target.classList.remove("side-nav--animatable");
        target.removeEventListener("transitionend", this.onTransitionEnd);
      }
    }
  };

  render() {
    return (
      <header>
        <div className="header">
          <BurgerBtn
            showSideNav={this.showSideNav}
            element={this.sideNavEl}
            className="header__itm"
          />
          <span ref={this.sideNavTitle} className="side-nav__title header__itm">
            Books
          </span>
          <AddNewBtn
            showSideNav={this.showSideNav}
            element={this.addNewEl}
            className="header__itm"
          />
        </div>
        <SideNav
          menu={this.menu}
          // hideSideNav={this.hideSideNav}
          sideNavEl={this.sideNavEl}
        />
        <SideNav
          position="right"
          // hideSideNav={this.hideSideNav}
          sideNavEl={this.addNewEl}
        />
      </header>
    );
  }
}

export default Navigation;

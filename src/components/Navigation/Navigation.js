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

  render() {
    return (
      <header>
        <div className="header">
          <BurgerBtn />
          <span id="sideNavTitle" className="side-nav__title">
            Books
          </span>
        </div>
        <Menu menu={this.menu} />
      </header>
    );
  }
}

export default Navigation;

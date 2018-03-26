import React, { Component } from "react";
import "./Navigation.css";
import { MyContext } from "../Provider";
import SideNav from "../Menu/SideNav";
import BurgerBtn from "../Menu/BurgerBtn";
import AddNewBtn from "../Menu/AddNewBtn";

class Navigation extends Component {
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
      <MyContext.Consumer>
        {ctx => (
          <header>
            <div className="header">
              <BurgerBtn
                showSideNav={this.showSideNav}
                element={this.sideNavEl}
              />
              <span
                ref={this.sideNavTitle}
                className="side-nav__title header__itm"
              >
                Books
              </span>
              <AddNewBtn
                showSideNav={this.showSideNav}
                element={this.addNewEl}
                context={ctx}
                componentName="BookForm"
              />
            </div>
            <SideNav
              menu={this.menu}
              componentName="Menu"
              sideNavEl={this.sideNavEl}
            />
            <SideNav
              position="right"
              componentName="BookForm"
              sideNavEl={this.addNewEl}
              context={ctx}
            />
          </header>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Navigation;

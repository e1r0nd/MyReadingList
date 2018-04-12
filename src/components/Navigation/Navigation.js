import React, { Component } from "react";
import "./Navigation.css";
import { MyContext } from "../Provider";
import SideNav from "../Menu/SideNav";
import BurgerBtn from "../Menu/BurgerBtn";
import AddNewBtn from "../Menu/AddNewBtn";
import SearchBtn from "../Menu/SearchBtn";

class Navigation extends Component {
  sideNavEl = React.createRef();
  addNewEl = React.createRef();
  sideNavTitle = React.createRef();
  searchBarRef = React.createRef();

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

  showSearchBar = () => {
    this.searchBarRef.value.classList.toggle("search-bar-active");
  };

  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <header>
            <div className="header header--over">
              <BurgerBtn
                showSideNav={this.showSideNav}
                element={this.sideNavEl}
              />
              <span
                ref={this.sideNavTitle}
                className="side-nav__title header__itm"
              >
                {ctx.state.title}
              </span>
              <SearchBtn
                showSearchBar={this.showSearchBar}
                element={this.searchEl}
                context={ctx}
                SearchRef={this.searchRef}
              />
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
            <div className="header search-bar" ref={this.searchBarRef}>
              <form>
                <input
                  name=""
                  ref={this.searchRef}
                  type="text"
                  placeholder="Search..."
                />
              </form>
            </div>
          </header>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Navigation;

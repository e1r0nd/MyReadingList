import React, { Component } from "react";
import "./Navigation.css";
import { MyContext } from "../Provider";
import SideNav from "../Menu/SideNav";
import BurgerBtn from "../Menu/BurgerBtn";
import AddNewBtn from "../Menu/AddNewBtn";
import SearchBtn from "../Menu/SearchBtn";
import Search from "../Menu/Search";

class Navigation extends Component {
  sideNavEl = React.createRef();
  addNewEl = React.createRef();
  sideNavTitle = React.createRef();
  searchBarRef = React.createRef();
  searchField = React.createRef();

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
    const searchBar = this.searchBarRef.value;

    searchBar.classList.toggle("search-bar-active");
    searchBar.classList.contains("search-bar-active") &&
      this.searchField.value.focus();
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
              {"Statistics" !== ctx.state.title && (
                <SearchBtn showSearchBar={this.showSearchBar} />
              )}
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
              <Search
                showSearchBar={this.showSearchBar}
                searchField={this.searchField}
              />
            </div>
          </header>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Navigation;

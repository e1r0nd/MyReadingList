import React, { Component } from "react";
import "./Navigation.css";
import { MyContext } from "../Provider";
import SideNav from "../Header/SideNav";
import BurgerBtn from "../Header/BurgerBtn";
import AddNewBtn from "../Header/AddNewBtn";
import SearchBtn from "../Header/SearchBtn";
import Search from "../Header/Search";
import Modal from "../Modal/Modal";

class Navigation extends Component {
  sideNavEl = React.createRef();
  addNewEl = React.createRef();
  sideNavTitle = React.createRef();
  searchBarRef = React.createRef();
  searchField = React.createRef();
  titleRef = React.createRef();

  showSideNav = (el, componentName) => {
    el.value.classList.add("side-nav--animatable");
    el.value.classList.add("side-nav--visible");
    el.value.addEventListener("transitionend", this.onTransitionEnd);
    if ("BookForm" === componentName) {
      setTimeout(() => this.titleRef.value.focus(), 300);
    }
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
                isVisible={"Search..." !== ctx.state.title}
              />
              <span
                ref={this.sideNavTitle}
                className="side-nav__title header__itm"
              >
                {ctx.state.title}
              </span>
              <SearchBtn
                showSearchBar={this.showSearchBar}
                isVisible={"Statistics" !== ctx.state.title}
              />

              <AddNewBtn
                showSideNav={e => this.showSideNav(e, "BookForm")}
                element={this.addNewEl}
                context={ctx}
                componentName="BookForm"
                isVisible={"Search..." !== ctx.state.title}
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
              titleRef={this.titleRef}
            />
            <div
              className={`header search-bar ${
                ctx.state.query ? "search-bar-active" : ""
              }`}
              ref={this.searchBarRef}
            >
              <Search
                showSearchBar={this.showSearchBar}
                searchField={this.searchField}
              />
            </div>
            <Modal />
          </header>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Navigation;

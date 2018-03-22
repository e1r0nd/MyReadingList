import React, { Component, Fragment } from "react";
import { MyContext } from "../Provider";
import MenuItem from "./MenuItem";
import Login from "./Login";

class Menu extends Component {
  componentDidMount() {
    // Lazy load the background image
    setTimeout(() => {
      this.sideNavHeader.value.classList.add("side-nav__header--lazy-bg");
    }, 1000);
  }

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

  sideNavHeader = React.createRef();

  render() {
    return (
      <Fragment>
        <div className="side-nav__mock-bg">
          <header className="side-nav__header" ref={this.sideNavHeader}>
            <span>
              <MyContext.Consumer>
                {ctx => ctx.userName || "Anonymous"}
              </MyContext.Consumer>
            </span>
            <Login />
          </header>
        </div>
        <ul className="side-nav__content">
          {this.menu.items.map((x, i) => (
            <MenuItem
              key={i}
              details={x}
              selected={this.menu.selected}
              index={i}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Menu;

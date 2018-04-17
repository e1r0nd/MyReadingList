import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";
import MenuItem from "./MenuItem";
import Login from "./Login";

class Menu extends Component {
  static propTypes = {
    hideSideNav: PropTypes.func.isRequired,
    context: PropTypes.object
  };

  componentDidMount() {
    // Lazy load the background image
    setTimeout(() => {
      this.sideNavHeader.value.classList.add("side-nav__header--lazy-bg");
    }, 1000);
  }

  menu = [
    {
      title: "Wishlist",
      link: "/book/wishlist",
      icon: "list",
      className: ""
    },
    {
      title: "Read",
      link: "/book/read",
      icon: "book",
      className: ""
    },
    {
      title: "Favorites",
      link: "/book/favorites",
      icon: "favorite",
      className: ""
    },
    {
      title: "Done",
      link: "/book/done",
      icon: "done",
      className: ""
    },
    {
      title: "Blamelist",
      link: "/book/blamelist",
      icon: "block",
      className: ""
    },
    {
      title: "Statistics",
      link: "/stats",
      icon: "stats",
      className: ""
    }
  ];

  sideNavHeader = React.createRef();

  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            <div className="side-nav__mock-bg">
              <header className="side-nav__header" ref={this.sideNavHeader}>
                <span>{ctx.state.userName || "Anonymous"}</span>
                <Login />
              </header>
            </div>
            <ul className="side-nav__content">
              {this.menu.map((x, i) => (
                <MenuItem
                  key={i}
                  details={x}
                  hideSideNav={this.props.hideSideNav}
                  ctx={ctx}
                />
              ))}
            </ul>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Menu;

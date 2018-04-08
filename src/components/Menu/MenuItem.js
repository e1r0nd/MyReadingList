import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class MenuItem extends Component {
  static propTypes = {
    details: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string
    }).isRequired,
    hideSideNav: PropTypes.func.isRequired
  };

  render() {
    const { title, link } = this.props.details;

    return (
      <li>
        <NavLink
          className="side-nav__lnk"
          to={link}
          onClick={this.props.hideSideNav}
        >
          {title}
        </NavLink>
      </li>
    );
  }
}

export default MenuItem;

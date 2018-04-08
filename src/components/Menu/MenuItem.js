import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

class MenuItem extends Component {
  static propTypes = {
    details: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string
    }),
    selected: PropTypes.number,
    index: PropTypes.number
  };

  render() {
    const { title, link } = this.props.details;
    const { selected, index } = this.props;
    return (
      <BrowserRouter>
        <li>
          <Link
            className={`side-nav__lnk${selected === index ? " active" : ""}`}
            to={link}
          >
            {title}
          </Link>
        </li>
      </BrowserRouter>
    );
  }
}

export default MenuItem;

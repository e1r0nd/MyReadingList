import React, { Component } from "react";
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
      <li>
        <a
          id={`${title}Nav`}
          className={`side-nav__lnk${selected === index ? " active" : ""}`}
          data-type="nav-select"
          data-title={title}
          href={link}
        >
          <span>{title}</span>
        </a>
      </li>
    );
  }
}

export default MenuItem;

import React, { Component } from "react";
import propTypes from "prop-types";

class Item extends Component {
  // handleClick = () => {
  //   this.props.addToOrder(this.props.index);
  // };

  render() {
    const {
      author,
      // date,
      // mark,
      // order,
      // type,
      // tag,
      title
      // quote
    } = this.props.book;

    return (
      <li className="">
        <p className="">{title}</p>
        <p>{author}</p>
      </li>
    );
  }
}

Item.propTypes = {
  book: propTypes.object
};

export default Item;

import React, { Component } from "react";
import PropTypes from "prop-types";

class Item extends Component {
  static propTypes = {
    book: PropTypes.shape({
      author: PropTypes.string,
      date: PropTypes.string,
      mark: PropTypes.string,
      order: PropTypes.string,
      type: PropTypes.string,
      tag: PropTypes.string,
      title: PropTypes.string,
      quote: PropTypes.string
    })
  };
  // handleClick = () => {
  //   this.props.addToOrder(this.props.index);
  // };

  render() {
    const {
      author,
      date,
      mark,
      order,
      type,
      tag,
      title,
      quote
    } = this.props.book;

    return (
      <li className="list-item">
        <span className="list-item__title">&laquo;{title}&raquo;</span>.
        {"book" === type ? (
          <span className="list-item__author">{author}</span>
        ) : (
          <a className="list-item__author" href={author}>
            click me
          </a>
        )}
        <span>{tag}</span>
        <span>{mark}</span>
        <p className="list-item__date">{date}</p>
        <span>{order}</span>
        <p>{quote}</p>
      </li>
    );
  }
}

export default Item;

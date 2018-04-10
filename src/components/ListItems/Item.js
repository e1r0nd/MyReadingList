import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";

class Item extends Component {
  static propTypes = {
    index: PropTypes.string,
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
  openEditForm = ctx => {
    ctx.setCurrentBook(this.props.index);
    ctx.setSideNav("BookForm", true);
  };

  render() {
    const { author, date, mark, order, tag, title, quote } = this.props.book;

    return (
      <MyContext.Consumer>
        {ctx => (
          <li
            className="list-item"
            onClick={() => {
              this.openEditForm(ctx);
            }}
          >
            <span className="list-item__title">&laquo;{title}&raquo;</span>.{" "}
            <span className="list-item__author">{author}</span>{" "}
            <span>{tag}</span> <span>{mark}</span>{" "}
            <p className="list-item__date">{date}</p> <span>{order}</span>{" "}
            <p>{quote}</p>
          </li>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Item;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";
import star from "./star.svg";

class Item extends Component {
  static propTypes = {
    index: PropTypes.string,
    book: PropTypes.shape({
      author: PropTypes.string,
      date: PropTypes.string,
      mark: PropTypes.string,
      order: PropTypes.string,
      type: PropTypes.string,
      title: PropTypes.string,
      quote: PropTypes.string
    })
  };
  openEditForm = ctx => {
    ctx.setCurrentBook(this.props.index);
    ctx.setSideNav("BookForm", true);
  };

  render() {
    const { author, date, mark, order, title, quote } = this.props.book;
    const starIcon = `<img class="book-mark__itm" src=${star} alt="" />`;

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
            <div className="list-item__mark">
              <span className="list-item__author">{author}</span>{" "}
              {"Done" === ctx.state.title && (
                <span
                  className="book-mark"
                  dangerouslySetInnerHTML={{ __html: starIcon.repeat(mark) }}
                />
              )}
            </div>
            <p className="list-item__date">{date}</p> <span>{order}</span>{" "}
            <p>{quote}</p>
          </li>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Item;

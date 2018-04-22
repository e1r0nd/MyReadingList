import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";
import star from "./star.svg";

class Item extends Component {
  static propTypes = {
    index: PropTypes.string,
    draggable: PropTypes.bool,
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
    const { author, date, mark, order, title } = this.props.book;
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
            {this.props.draggable && (
              <div className="list-item__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
                </svg>
              </div>
            )}
            <div className="list-item__content">
              <span className="list-item__title">&laquo;{title}&raquo;. </span>{" "}
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
            </div>
          </li>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Item;

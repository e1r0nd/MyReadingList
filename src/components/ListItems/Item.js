import React, { Component } from "react";
import PropTypes from "prop-types";
import { SortableHandle as sortableHandle } from "react-sortable-hoc";
import { MyContext } from "../Provider";
import star from "./star.svg";

const DragHandle = sortableHandle(() => (
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
));

class Item extends Component {
  static propTypes = {
    index: PropTypes.string,
    draggable: PropTypes.bool,
    book: PropTypes.shape({
      author: PropTypes.string,
      date: PropTypes.string,
      mark: PropTypes.string,
      order: PropTypes.number,
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
    const { author, date, mark, title } = this.props.book;
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
            {this.props.draggable && <DragHandle />}
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
              <p className="list-item__date">{date}</p>{" "}
            </div>
          </li>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Item;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";

class BookForm extends Component {
  static propTypes = {
    hideSideNav: PropTypes.func.isRequired,
    context: PropTypes.object
  };

  authorRef = React.createRef();
  dateRef = React.createRef();
  markRef = React.createRef();
  titleRef = React.createRef();
  quoteRef = React.createRef();

  sumbitBook = (e, cb) => {
    const book = {
      author: this.authorRef.value.value,
      date: this.dateRef.value.value,
      mark: this.markRef.value.value,
      title: this.titleRef.value.value,
      quote: this.quoteRef.value.value
    };

    e.preventDefault();
    cb(book);
    this.props.hideSideNav();
    e.currentTarget.reset();
    this.props.context.setCurrentBook();
  };

  handleChange = event => {
    const updatedBook = {
      ...this.props.context.state.currentBook,
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.props.context.changeBook(updatedBook);
  };

  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <form
            className=""
            onSubmit={e => {
              this.sumbitBook(
                e,
                ctx[ctx.state.currentBook.title ? "updateBook" : "addBook"]
              );
            }}
          >
            <input
              name="title"
              ref={this.titleRef}
              type="text"
              placeholder="Title"
              value={ctx.state.currentBook.title || ""}
              onChange={this.handleChange}
            />
            <input
              name="author"
              ref={this.authorRef}
              type="text"
              placeholder="Author"
              value={ctx.state.currentBook.author || ""}
              onChange={this.handleChange}
            />
            <input
              name="date"
              ref={this.dateRef}
              type="text"
              placeholder="Date"
              value={ctx.state.currentBook.date || ""}
              onChange={this.handleChange}
            />
            <select
              name="mark"
              ref={this.markRef}
              value={ctx.state.currentBook.mark || ""}
              onChange={this.handleChange}
            >
              <option value="1">Too Bad</option>
              <option value="2">OK!</option>
              <option value="3">Interesting</option>
              <option value="4">Like it!</option>
              <option value="5">Want to read</option>
              <option value="6">Reading now</option>
            </select>
            <textarea
              name="quote"
              ref={this.quoteRef}
              placeholder="Quote"
              value={ctx.state.currentBook.quote || ""}
              onChange={this.handleChange}
            />
            <button type="submit">
              {ctx.state.currentBook.title ? "Save" : "Add"} Book
            </button>
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}

export default BookForm;

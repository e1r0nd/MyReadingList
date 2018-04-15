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
    switch (book.mark) {
      case "0":
        book.list = "read";
        break;
      case "1":
      case "2":
      case "3":
        book.list = "done";
        break;
      case "4":
        book.list = "favorites";
        break;
      case "5":
        book.list = "wishlist";
        break;
      case "6":
        book.list = "blamelist";
        break;
      default:
        console.warning("Book's marks is empty. Should be String value");
    }
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
                ctx[ctx.state.currentIndex ? "updateBook" : "addBook"]
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
              <option value="0">Reading Now</option>
              <option value="1">1 star</option>
              <option value="2">2 stars</option>
              <option value="3">3 stars</option>
              <option value="4">Favorite</option>
              <option value="5">Want to read</option>
              <option value="6">Don&rsquo;t want to read</option>
            </select>
            <textarea
              name="quote"
              ref={this.quoteRef}
              placeholder="Quote"
              value={ctx.state.currentBook.quote || ""}
              onChange={this.handleChange}
            />
            <button type="submit">
              {ctx.state.currentIndex ? "Save" : "Add"} Book
            </button>
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}

export default BookForm;

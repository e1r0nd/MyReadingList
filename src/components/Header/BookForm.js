import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";

class BookForm extends Component {
  static propTypes = {
    hideSideNav: PropTypes.func.isRequired,
    context: PropTypes.object,
    titleRef: PropTypes.object.isRequired
  };

  componentDidMount() {
    // Lazy load the background image
    setTimeout(() => {
      this.sideNavHeader.value.classList.add("side-nav__add--lazy-bg");
    }, 1000);
  }

  sideNavHeader = React.createRef();
  authorRef = React.createRef();
  dateRef = React.createRef();
  markRef = React.createRef();

  sumbitBook = (e, cb) => {
    const book = {
      author: this.authorRef.value.value,
      date: this.dateRef.value.value,
      mark: this.markRef.value.value,
      title: this.props.titleRef.value.value
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
        console.warning("Book.mark field is empty. Should be String value");
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

  handleDelete = (e, ctx) => {
    const title = `Remove "${ctx.state.currentBook.title}"?`;

    e.preventDefault();
    ctx.showModal(title, "Remove");
  };

  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            <div className="side-nav__mock-bg">
              <header
                className="side-nav__header side-nav__header--narrow"
                ref={this.sideNavHeader}
              />
            </div>
            <div className="form">
              <form
                className="form__element side-nav__content"
                onSubmit={e => {
                  this.sumbitBook(
                    e,
                    ctx[ctx.state.currentIndex ? "updateBook" : "addBook"]
                  );
                }}
              >
                <input
                  name="title"
                  className="form__control form__control--narrow inp-fld"
                  ref={this.props.titleRef}
                  type="text"
                  placeholder="Title"
                  value={ctx.state.currentBook.title || ""}
                  onChange={this.handleChange}
                />
                <input
                  name="author"
                  className="form__control form__control--narrow inp-fld"
                  ref={this.authorRef}
                  type="text"
                  placeholder="Author"
                  value={ctx.state.currentBook.author || ""}
                  onChange={this.handleChange}
                />
                <input
                  name="date"
                  className="form__control form__control--narrow inp-fld"
                  ref={this.dateRef}
                  type="date"
                  placeholder="Date"
                  value={ctx.state.currentBook.date || ""}
                  onChange={this.handleChange}
                />
                <select
                  name="mark"
                  className="form__control form__control--narrow inp-fld"
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
                <div className="form__btns">
                  {ctx.state.currentIndex ? (
                    <button
                      onClick={e => this.handleDelete(e, ctx)}
                      className="btn-flat btn-flat--danger form__btn"
                    >
                      Remove Book
                    </button>
                  ) : (
                    <span />
                  )}
                  <button type="submit" className="btn-flat form__btn">
                    {ctx.state.currentIndex ? "Save" : "Add"} Book
                  </button>
                </div>
              </form>
            </div>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default BookForm;

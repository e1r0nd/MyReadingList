import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";

class AddForm extends Component {
  static propTypes = {
    hideSideNav: PropTypes.func
  };

  authorRef = React.createRef();
  dateRef = React.createRef();
  markRef = React.createRef();
  tagRef = React.createRef();
  titleRef = React.createRef();
  quoteRef = React.createRef();

  createBook = () => ({
    author: this.authorRef.value.value,
    date: this.dateRef.value.value,
    mark: this.markRef.value.value,
    tag: this.tagRef.value.value,
    title: this.titleRef.value.value,
    quote: this.quoteRef.value.value
  });

  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <form
            className="fish-edit"
            onSubmit={e => {
              e.preventDefault();
              ctx.addBook(this.createBook());
              this.props.hideSideNav();
              e.currentTarget.reset();
            }}
          >
            <input
              name="title"
              ref={this.titleRef}
              type="text"
              placeholder="Title"
            />

            <input
              name="author"
              ref={this.authorRef}
              type="text"
              placeholder="Author"
            />
            <input
              name="date"
              ref={this.dateRef}
              type="text"
              placeholder="Date"
            />
            <select name="mark" ref={this.markRef}>
              <option value="1">Too Bad</option>
              <option value="2">OK!</option>
              <option value="3">Interesting</option>
              <option value="4">Like it!</option>
              <option value="5">Want to read</option>
              <option value="6">Reading now</option>
            </select>
            <select name="tag" ref={this.tagRef}>
              <option value="1">&nbsp;</option>
              <option value="2">entertaining</option>
              <option value="3">education</option>
            </select>
            <textarea name="quote" ref={this.quoteRef} placeholder="Quote" />
            <button type="submit">Add Book</button>
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}

export default AddForm;

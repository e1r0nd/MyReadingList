import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./ListItems.css";

class ListItems extends Component {
  static propTypes = {
    books: PropTypes.object
  };

  render() {
    return (
      <Fragment>
        {this.props.books.length ? (
          Object.keys(this.props.books).map(key => (
            <Item key={key} book={this.props.books[key]} index={key} />
          ))
        ) : (
          <p>Nothing is here</p>
        )}
      </Fragment>
    );
  }
}

export default ListItems;

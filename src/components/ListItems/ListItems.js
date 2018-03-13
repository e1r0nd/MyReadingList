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
        {Object.keys(this.props.books).map(key => (
          <Item
            key={key}
            book={this.props.books[key]}
            // updateBook={this.props.updateFish}
            index={key}
            // deleteFish={this.props.deleteFish}
          />
        ))}
      </Fragment>
    );
  }
}

export default ListItems;

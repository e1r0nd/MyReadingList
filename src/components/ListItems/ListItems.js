import React, { Component, Fragment } from "react";
import propTypes from "prop-types";
import Item from "./Item";
import "./ListItems.css";

class ListItems extends Component {
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

ListItems.propTypes = {
  books: propTypes.object
};

export default ListItems;

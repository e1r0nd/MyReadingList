import React, { Component } from "react";
import propTypes from "prop-types";
import Item from "../Item/Item";
import "./ListItems.scss";

class ListItems extends Component {
  render() {
    return (
      <div className="list">
        <h2>books</h2>
        {Object.keys(this.props.books).map(key => (
          <Item
            key={key}
            book={this.props.books[key]}
            // updateBook={this.props.updateFish}
            index={key}
            // deleteFish={this.props.deleteFish}
          />
        ))}
      </div>
    );
  }
}

ListItems.propTypes = {
  books: propTypes.object
};

export default ListItems;

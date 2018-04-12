import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";

class Search extends Component {
  static propTypes = {
    showSearchBar: PropTypes.func.isRequired,
    searchField: PropTypes.object
  };

  handleSearch = context => {
    context.updateQuery(this.props.searchField.value.value);
  };

  handleKeys = e => {
    const query = this.props.searchField.value;

    if (27 === e.keyCode) {
      query.value ? (query.value = "") : this.props.showSearchBar();
    }
  };

  sumbitSearch = e => {
    e.preventDefault();
    this.props.showSearchBar();
  };

  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <form onSubmit={this.sumbitSearch}>
            <input
              name=""
              ref={this.props.searchField}
              type="text"
              placeholder="Search..."
              onChange={() => this.handleSearch(ctx)}
              onKeyUp={this.handleKeys}
            />
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Search;

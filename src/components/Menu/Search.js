import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";

class Search extends Component {
  static propTypes = {
    showSearchBar: PropTypes.func.isRequired
  };

  searchQuery = React.createRef();

  handleSearch = context => {
    context.updateQuery(this.searchQuery.value.value);
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
              ref={this.searchQuery}
              type="text"
              placeholder="Search..."
              onChange={() => this.handleSearch(ctx)}
            />
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Search;

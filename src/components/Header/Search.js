import React, { Component } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../Provider";
import "./Header.css";

class Search extends Component {
  static propTypes = {
    showSearchBar: PropTypes.func.isRequired,
    searchField: PropTypes.object
  };

  handleSearch = context => {
    context.updateQuery(this.props.searchField.value.value);
  };

  handleKeys = (e, ctx) => {
    const query = this.props.searchField.value;

    if (27 === e.keyCode) {
      if (query.value) {
        query.value = "";
        this.handleSearch(ctx);
      } else {
        this.props.showSearchBar();
      }
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
          <form className="form__element" onSubmit={this.sumbitSearch}>
            <input
              className="form__control inp-fld"
              name=""
              ref={this.props.searchField}
              type="text"
              placeholder="Search..."
              onChange={() => this.handleSearch(ctx)}
              onKeyUp={e => this.handleKeys(e, ctx)}
              value={ctx.state.query}
            />
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Search;

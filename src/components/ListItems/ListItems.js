import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
import { MyContext } from "../Provider";
import Item from "./Item";
import "./ListItems.css";

class ListItems extends Component {
  // static propTypes = {
  //   books: PropTypes.object
  // };

  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            {ctx.state.books ? (
              Object.keys(ctx.state.books).map(key => (
                <Item key={key} book={ctx.state.books[key]} index={key} />
              ))
            ) : (
              <p>Nothing is here</p>
            )}
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default ListItems;

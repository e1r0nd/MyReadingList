import React, { Component, Fragment } from "react";
import { MyContext } from "../Provider";
import Item from "./Item";
import "./ListItems.css";

class ListItems extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.match.params.viewId);
    return Object.assign(nextProps, ...prevState);
  }

  state = {};

  render() {
    const currentList = this.state.match.params.viewId;
    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            {ctx.state.books ? (
              Object.keys(ctx.state.books)
                .filter(key => currentList === ctx.state.books[key].list)
                .map(key => (
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

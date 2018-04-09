import React, { Component, Fragment } from "react";
import { MyContext } from "../Provider";
import Item from "./Item";
import "./ListItems.css";

class ListItems extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return Object.assign(nextProps, ...prevState);
  }

  state = {};

  render() {
    const currentList = this.state.match.params.viewId;
    const capsСurrentList = currentList[0].toUpperCase() + currentList.slice(1);

    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            {!ctx.state.title && ctx.updateTitle(capsСurrentList)}
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

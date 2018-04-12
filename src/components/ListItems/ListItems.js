import React, { Component } from "react";
import { MyContext } from "../Provider";
import Item from "./Item";
import "./ListItems.css";

class ListItems extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    return Object.assign(nextProps, ...prevState);
  }

  state = {};

  render() {
    const currentList = this.state.match.params.viewId;
    const capsСurrentList = currentList[0].toUpperCase() + currentList.slice(1);

    return (
      <MyContext.Consumer>
        {ctx => (
          <ul className="main__list">
            ctx.state.query = {ctx.state.query}
            {!ctx.state.title && ctx.updateTitle(capsСurrentList)}
            {ctx.state.books ? (
              Object.keys(ctx.state.books)
                .filter(
                  key =>
                    currentList === ctx.state.books[key].list ||
                    (ctx.state.query &&
                      (ctx.state.books[key].title.includes(ctx.state.query) ||
                        ctx.state.books[key].author.includes(ctx.state.query) ||
                        ctx.state.books[key].quote.includes(ctx.state.query)))
                )
                .map(key => (
                  <Item key={key} book={ctx.state.books[key]} index={key} />
                ))
            ) : (
              <p>Nothing is here</p>
            )}
          </ul>
        )}
      </MyContext.Consumer>
    );
  }
}

export default ListItems;

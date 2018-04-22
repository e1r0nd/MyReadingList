import React, { Component } from "react";
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
    const draggable = "wishlist" === currentList;

    return (
      <MyContext.Consumer>
        {ctx => (
          <ul className="main__list">
            {!ctx.state.title && ctx.updateTitle(capsСurrentList)}
            {ctx.state.books ? (
              Object.keys(ctx.state.books)
                .filter(key => {
                  const query = ctx.state.query.toLowerCase();
                  const { title, author, quote, list } = ctx.state.books[key];

                  return ctx.state.query.length > 1
                    ? title.toLowerCase().includes(query) ||
                        author.toLowerCase().includes(query) ||
                        quote.toLowerCase().includes(query)
                    : currentList === list;
                })
                .sort((a, b) => {
                  const [date1, date2] = [
                    new Date(ctx.state.books[a].date).getTime(),
                    new Date(ctx.state.books[b].date).getTime()
                  ];
                  const [order1, order2] = [
                    ctx.state.books[a].order,
                    ctx.state.books[b].order
                  ];
                  if ("wishlist" === currentList) {
                    return order2 - order1;
                  }
                  if ("wishlist" !== currentList || "read" !== currentList) {
                    return date2 - date1;
                  }
                  return 0;
                })
                .map(key => (
                  <Item
                    key={key}
                    book={ctx.state.books[key]}
                    index={key}
                    draggable={draggable}
                  />
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

import React, { Component, Fragment } from "react";
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement,
  arrayMove
} from "react-sortable-hoc";
import { MyContext } from "../Provider";
import Item from "./Item";
import "./ListItems.css";

const SortableItem = sortableElement(({ idx, ctx, draggable }) => {
  return (
    <Item
      key={idx}
      book={ctx.state.books[idx]}
      index={idx}
      draggable={draggable}
    />
  );
});

const SortableList = sortableContainer(({ ctx, items, draggable }) => {
  return (
    <ul className="main__list">
      {items.map((key, index) => (
        <SortableItem
          key={key}
          index={index}
          idx={key}
          ctx={ctx}
          draggable={draggable}
        />
      ))}
    </ul>
  );
});

function onSortEnd({ newIndex, oldIndex }) {
  console.log(newIndex, oldIndex);

  this.updateOrder(arrayMove(this.state.listedBooks, oldIndex, newIndex));
}

class ListItems extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return Object.assign(nextProps, ...prevState);
  }

  state = {};

  render() {
    const currentList = this.state.match.params.viewId;
    const capsСurrentList = currentList[0].toUpperCase() + currentList.slice(1);
    const draggable = "wishlist" === currentList;

    const getItems = ctx => {
      const listedBooks = Object.keys(ctx.state.books)
        .filter(key => {
          const query = ctx.state.query.toLowerCase();
          const { title, author, list } = ctx.state.books[key];

          return ctx.state.query.length > 1
            ? title.toLowerCase().includes(query) ||
                author.toLowerCase().includes(query)
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
            return order1 - order2;
          }
          if ("wishlist" !== currentList || "read" !== currentList) {
            return date2 - date1;
          }
          return 0;
        });

      ctx.state.listedBooks.length !== listedBooks.length &&
        ctx.setListedBooks(listedBooks);
      // this.state.listedBooks.length !== listedBooks.length &&
      //   this.setState({ listedBooks });
    };

    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            {!ctx.state.title && ctx.updateTitle(capsСurrentList)}
            {ctx.state.books && getItems(ctx, currentList)}

            <SortableList
              ctx={ctx}
              items={ctx.state.listedBooks}
              draggable={draggable}
              onSortEnd={onSortEnd.bind(ctx)}
              useDragHandle
            />
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default ListItems;

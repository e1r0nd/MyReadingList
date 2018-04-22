import React, { Component, Fragment } from "react";
import { MyContext } from "./Provider";

class Import extends Component {
  txtRef = React.createRef();

  handleClick = (e, ctx) => {
    e.preventDefault();
    const str = JSON.parse(this.txtRef.value.value);
    let index = 0;

    str.forEach(element => {
      const { mark, title, author, date } = element;
      const book = { mark, title, author, date };

      switch (book.mark) {
        case "0":
          book.list = "read";
          break;
        case "1":
        case "2":
        case "3":
          book.list = "done";
          break;
        case "4":
          book.list = "favorites";
          break;
        case "5":
          book.list = "wishlist";
          break;
        case "6":
          book.list = "blamelist";
          break;
        default:
          console.warning("Book.mark field is empty. Should be String value");
      }

      book.order = "wishlist" === book.list ? index++ : -1;

      ctx.addBook(book);
    });
  };

  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            {!ctx.state.title && ctx.updateTitle("Statistics")}
            <div>
              <textarea ref={this.txtRef} />
              <button onClick={e => this.handleClick(e, ctx)}>import</button>
            </div>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Import;

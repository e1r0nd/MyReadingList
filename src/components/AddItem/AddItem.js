import React, { Component } from "react";

class AddItem extends Component {
  myInput = React.createRef();
  gotoStore = event => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/page/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.gotoStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
        />
        <button type="submit">Select Store</button>
      </form>
    );
  }
}

export default AddItem;

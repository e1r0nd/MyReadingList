import React, { Component } from "react";
// import PropTypes from "prop-types";
import { MyContext } from "../Provider";
// import base, { firebaseApp } from "../../base";
// import firebase from "firebase";

class Login extends Component {
  // static propTypes = {
  //   books: PropTypes.object.isRequired,
  //   bookService: PropTypes.object,
  //   uid: PropTypes.string.isRequired,
  //   userService: PropTypes.object
  // };

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.authHandler({ user });
  //     }
  //   });
  // }

  // authHandler = async authData => {
  //   this.props.userService.setUserId(
  //     authData.user.uid,
  //     authData.user.displayName
  //   );
  //   const books = await base.fetch(authData.user.uid, { context: this });
  //   await this.props.bookService.reloadBooks(books);
  //   await this.props.bookService.syncStart();
  // };

  // authenticate = () => {
  //   const authProvider = new firebase.auth.FacebookAuthProvider();
  //   firebaseApp
  //     .auth()
  //     .signInWithPopup(authProvider)
  //     .then(this.authHandler);
  // };

  // logout = async () => {
  //   await firebase.auth().signOut();
  //   await this.props.userService.setUserId("", "");
  //   await this.props.bookService.syncStop();
  //   await this.props.bookService.reloadBooks();
  // };

  // LogInOut = () => {
  //   this.props.uid ? this.logout() : this.authenticate();
  // };

  render() {
    return (
      <MyContext.Consumer>
        {ctx => (
          <button
            className=""
            aria-label="login or logout"
            role="presentation"
            onClick={this.LogInOut}
          >
            {ctx.uid ? "Logout" : "Login"}
          </button>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Login;

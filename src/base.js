import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBf9ECI7eNraODUIuXSXoqnRecf3c2NO-g",
  authDomain: "personalbookshelf-52e36.firebaseapp.com",
  databaseURL: "https://personalbookshelf-52e36.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

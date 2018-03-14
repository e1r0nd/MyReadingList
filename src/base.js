import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBSv6Y-h-eLzbhr9RoVTE_ps-7epih_x8U",
  authDomain: "myreadinglist-f5599.firebaseapp.com",
  databaseURL: "https://myreadinglist-f5599.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

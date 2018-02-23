import { combineReducers } from "redux";
import todos from "./todos";
import changeTitle from "./title";

const rootReducer = combineReducers({
  todos,
  changeTitle,
});

export default rootReducer;

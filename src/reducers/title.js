import {
  CHANGE_TITLE,
} from "../constants/ActionTypes";

const initialState = {
  title: "Todos"
};

export default function changeTitle(state = initialState, action) {
  switch (action.type) {
  case CHANGE_TITLE:
    return Object.assign({}, state, {
      title: action.title
    });

  default:
    return state;
  }
}

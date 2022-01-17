import { combineReducers } from "redux";
import userNameReducer from "./name/reducer";
import todoReducer from "./todo/reducer";

const reducer = combineReducers({
  userName: userNameReducer,
  todos: todoReducer
});

export default reducer;
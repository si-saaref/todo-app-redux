import { combineReducers } from "redux";
import userNameReducer from "./name/reducer";

const reducer = combineReducers({
  userName: userNameReducer
});

export default reducer;
import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import listReducer from "./listReducer";

export default combineReducers({
  loginReducer,
  listReducer
});

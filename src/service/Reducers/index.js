import BGReducer from "./BGReducer";
import TextReducer from "./TextReducer";
import CurrentTextReducer from "./CurrentTextReducer";
import { combineReducers } from "redux";

export default combineReducers({
  BGReducer,
  TextReducer,
  CurrentTextReducer
});

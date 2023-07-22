import changeDuration from "./changeDuration";
import { combineReducers } from "redux";
import changeUser from "./changeUser";
import changeDifficultySolo from "./changeDifficultySolo";
import changeWords from "./changeWords";
import changeSearchId from "./changeSearchId";

const rootReducer = combineReducers({
  changeDuration,
  changeUser,
  changeDifficultySolo,
  changeWords,
  changeSearchId
});

export default rootReducer;

import changeDuration from "./changeDuration";
import { combineReducers } from "redux";
import changeUser from "./changeUser";
import changeDifficultySolo from "./changeDifficultySolo";
import changeWords from "./changeWords";

const rootReducer = combineReducers({
  changeDuration,
  changeUser,
  changeDifficultySolo,
  changeWords,
});

export default rootReducer;

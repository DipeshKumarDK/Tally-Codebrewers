import changeDuration from "./changeDuration"
import { combineReducers } from "redux";
import changeUser from "./changeUser";

const rootReducer = combineReducers({
    changeDuration,
    changeUser
})

export default rootReducer;
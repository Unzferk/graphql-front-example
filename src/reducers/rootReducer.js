import { combineReducers } from "redux";

import { courseReducer } from "./courseReducer";
import { alertReducer } from "./alertReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  courses: courseReducer,
  alert: alertReducer,
  user: userReducer,
});

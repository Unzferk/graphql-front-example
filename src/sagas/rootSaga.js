import { all } from "redux-saga/effects";

import { courseSaga } from "./coursesSaga";
import { userSaga } from "./userSaga";

function* rootSaga() {
  yield all([courseSaga(), userSaga()]);
}

export default rootSaga;

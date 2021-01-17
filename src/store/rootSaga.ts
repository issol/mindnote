import { all, fork } from "redux-saga/effects";
import { watchUser } from "./users/sagas";

export function* rootSaga() {
  yield all([fork(watchUser)]);
}

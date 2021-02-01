import { all, fork } from "redux-saga/effects";
import { watchUser } from "./users/sagas";
import { watchArticle } from './articles/sagas';

export function* rootSaga() {
  yield all([fork(watchUser)]);
  yield all([fork(watchArticle)]);
}

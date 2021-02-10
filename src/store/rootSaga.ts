import { all, fork } from 'redux-saga/effects';

import { watchUser } from './users/sagas';
import { watchArticle } from './articles/sagas';
import { watchArticleDetail } from './article/sagas';

export function* rootSaga() {
  yield all([fork(watchUser)]);
  yield all([fork(watchArticle)]);
  yield all([fork(watchArticleDetail)]);
}

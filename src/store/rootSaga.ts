import { all, fork } from 'redux-saga/effects';

import { watchUser } from './user/sagas';
import { watchArticle } from './articleList/sagas';
import { watchArticleDetail } from './article/sagas';

export function* rootSaga() {
  yield all([fork(watchUser)]);
  yield all([fork(watchArticle)]);
  yield all([fork(watchArticleDetail)]);
}

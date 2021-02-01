import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ARTICLE_LIST_REQUEST, fetchArticleList } from './actions';
import { HOST } from 'constants/requests';


const fetchArticleListApi = (token) =>
  axios.get(HOST + '/articles/my-list/', { headers: { Authorization: `token ${token}` } });


function* fetchArticleListAsync() {
  try {
    const token = localStorage.getItem('token');
    const res = yield call(fetchArticleListApi, token);

    yield put(fetchArticleList.success(res.data));
  } catch (e) {

    yield put(fetchArticleList.failure(e.request.responseText));
  }
}


export function* watchArticle() {
  yield takeEvery(FETCH_ARTICLE_LIST_REQUEST, fetchArticleListAsync);
}

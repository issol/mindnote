import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_ARTICLE_LIST_REQUEST,
  fetchArticleList,
  createArticle,
  CREATE_ARTICLE_REQUEST,
  deleteArticle,
  DELETE_ARTICLE_REQUEST,
  updateArticle,
} from './actions';
import { HOST } from 'constants/requests';
import { ArticleInfo, ArticleType } from './types';

const fetchArticleListApi = (token) =>
  axios.get(HOST + '/articles/my-list/', {
    headers: { Authorization: `token ${token}` },
  });

function* fetchArticleListAsync() {
  try {
    const token = localStorage.getItem('token');
    const res = yield call(fetchArticleListApi, token);
    yield put(fetchArticleList.success(res.data));
  } catch (e) {
    yield put(fetchArticleList.failure(e.request.responseText));
  }
}

const createArticleApi = (token: any, payload: ArticleInfo) =>
  axios.post(HOST + '/articles/', payload, {
    headers: { Authorization: `token ${token}` },
  });

function* createArticleAsync(action: { type: string; payload: ArticleInfo }) {
  try {
    const token = localStorage.getItem('token');
    const res = yield call(createArticleApi, token, action.payload);
    yield put(createArticle.success(res.data));
  } catch (e) {
    yield put(createArticle.failure(e.request.responseText));
  }
}

const deleteArticleApi = (token: any, id: number) =>
  axios.delete(HOST + `/articles/${id}/`, {
    headers: { Authorization: `token ${token}` },
  });

function* deleteArticleAsync(action) {
  try {
    const token = localStorage.getItem('token');
    const id = action.payload;
    const res = yield call(deleteArticleApi, token, id);

    yield put(deleteArticle.success(res));
  } catch (e) {
    console.log(e);

    yield put(deleteArticle.failure());
  }
}

export function* watchArticle() {
  yield takeEvery(FETCH_ARTICLE_LIST_REQUEST, fetchArticleListAsync);
  yield takeEvery(CREATE_ARTICLE_REQUEST, createArticleAsync);
  yield takeEvery(DELETE_ARTICLE_REQUEST, deleteArticleAsync);
}

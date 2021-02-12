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
  UPDATE_ARTICLE_REQUEST,
} from './actions';

import { HOST } from 'constants/requests';
import { ArticleInfo, UpdatedArticleInfo } from './types';

const fetchArticleListApi = () => axios.get(HOST + '/articles/my-list/');

function* fetchArticleListAsync() {
  try {
    const res = yield call(fetchArticleListApi);

    yield put(fetchArticleList.success(res.data));
  } catch (e) {
    yield put(fetchArticleList.failure(e.request.responseText));
  }
}

const createArticleApi = (payload: ArticleInfo) => axios.post(HOST + '/articles/', payload);

function* createArticleAsync({ type, payload }: ReturnType<typeof createArticle.request>) {
  try {
    const res = yield call(createArticleApi, payload);

    yield put(createArticle.success(res.data));
  } catch (e) {
    yield put(createArticle.failure(e.request.responseText));
  }
}

const deleteArticleApi = (id: number) => axios.delete(HOST + `/articles/${id}/`);

function* deleteArticleAsync({ type, payload }: ReturnType<typeof deleteArticle.request>) {
  try {
    yield call(deleteArticleApi, payload);
    window.location.href = '/article-list';
    yield put(deleteArticle.success(payload));
  } catch (e) {
    yield put(deleteArticle.failure());
  }
}

const updateArticleApi = (id: number, payload: UpdatedArticleInfo) => axios.patch(HOST + `/articles/${id}/`, payload);

function* updateArticleAsync({ type, payload }: ReturnType<typeof updateArticle.request>) {
  try {
    const res = yield call(updateArticleApi, payload.id, payload);

    window.location.href = '/article-list';
    yield put(updateArticle.success(res.data));
  } catch (e) {
    yield put(updateArticle.failure('업데이트 실패'));
  }
}

export function* watchArticle() {
  yield takeEvery(CREATE_ARTICLE_REQUEST, createArticleAsync);
  yield takeEvery(FETCH_ARTICLE_LIST_REQUEST, fetchArticleListAsync);
  yield takeEvery(UPDATE_ARTICLE_REQUEST, updateArticleAsync);
  yield takeEvery(DELETE_ARTICLE_REQUEST, deleteArticleAsync);
}

import axios from 'axios';

import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_ARTICLE_DETAIL_REQUEST,
  fetchArticleDetail,
  createNote,
  CREATE_NOTE_REQUEST,
  deleteNote,
  DELETE_NOTE_REQUEST,
} from './actions';
import { HOST } from 'constants/requests';
import { ArticleNoteId, NoteInfo } from './types';

const fetchArticleDetailApi = (token: any, id: number) =>
  axios.get(HOST + `/articles/${id}/`, {
    headers: { Authorization: `token ${token}` },
  });

function* fetchArticleDetailAsync(action: { type: string; payload: number }) {
  try {
    const token = localStorage.getItem('token');

    const res = yield call(fetchArticleDetailApi, token, action.payload);

    yield put(fetchArticleDetail.success(res.data));
  } catch (e) {
    yield put(fetchArticleDetail.failure());
  }
}

const createNoteApi = (token: any, payload: NoteInfo) =>
  axios.post(HOST + '/notes/', payload, { headers: { Authorization: `token ${token}` } });

function* createNoteAsync(action: { type: string; payload: NoteInfo }) {
  try {
    const token = localStorage.getItem('token');
    const res = yield call(createNoteApi, token, action.payload);

    yield put(createNote.success(res.data));
  } catch (e) {
    yield put(createNote.failure());
  }
}

const deleteNoteApi = (token: any, id: number) =>
  axios.delete(HOST + `/notes/${id}/`, {
    headers: { Authorization: `token ${token}` },
  });

function* deleteNoteAsync(action: { type: string; payload: ArticleNoteId }) {
  try {
    const token = localStorage.getItem('token');
    const id = action.payload.id;
    console.log(id, action.payload.article);

    yield call(deleteNoteApi, token, id);
    window.location.href = `/article/${action.payload.article}/`;
    yield put(deleteNote.success(id));
  } catch (e) {
    yield put(deleteNote.failure());
  }
}

export function* watchArticleDetail() {
  yield takeEvery(FETCH_ARTICLE_DETAIL_REQUEST, fetchArticleDetailAsync);
  yield takeEvery(DELETE_NOTE_REQUEST, deleteNoteAsync);
  yield takeEvery(CREATE_NOTE_REQUEST, createNoteAsync);
}

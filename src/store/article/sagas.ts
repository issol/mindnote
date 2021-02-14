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
import { NoteInfo } from './types';

const fetchArticleDetailApi = (id: number) => axios.get(HOST + `/articles/${id}/`);

function* fetchArticleDetailAsync({ payload }: ReturnType<typeof fetchArticleDetail.request>) {
  try {
    const res = yield call(fetchArticleDetailApi, payload);

    yield put(fetchArticleDetail.success(res.data));
  } catch (e) {
    yield put(fetchArticleDetail.failure());
  }
}

const createNoteApi = (payload: NoteInfo) => axios.post(HOST + '/notes/', payload);

function* createNoteAsync({ payload }: ReturnType<typeof createNote.request>) {
  try {
    const res = yield call(createNoteApi, payload);

    yield put(createNote.success(res.data));
  } catch (e) {
    yield put(createNote.failure());
  }
}

const deleteNoteApi = (id: number) => axios.delete(HOST + `/notes/${id}/`);

function* deleteNoteAsync({ payload }: ReturnType<typeof deleteNote.request>) {
  try {
    yield call(deleteNoteApi, payload.id);

    window.location.href = `/article/${payload.article}/`;

    yield put(deleteNote.success(payload.id));
  } catch (e) {
    yield put(deleteNote.failure());
  }
}

export function* watchArticleDetail() {
  yield takeEvery(FETCH_ARTICLE_DETAIL_REQUEST, fetchArticleDetailAsync);
  yield takeEvery(DELETE_NOTE_REQUEST, deleteNoteAsync);
  yield takeEvery(CREATE_NOTE_REQUEST, createNoteAsync);
}

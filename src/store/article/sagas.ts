import axios from 'axios';

import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_ARTICLE_DETAIL_REQUEST,
  fetchArticleDetail,
  createNote,
  CREATE_NOTE_REQUEST,
  deleteNote,
  DELETE_NOTE_REQUEST,
  createConnection,
  CREATE_CONNECTION_REQUEST,
  deleteConnection,
  DELETE_CONNECTION_REQUEST,
  updateNote,
  UPDATE_NOTE_REQUEST,
  updateConnection,
  UPDATE_CONNECTION_REQUEST,
} from './actions';
import { HOST } from 'constants/requests';
import { ConnectionInfo, NoteInfo, UpdatedConnectionInfo, UpdatedNoteInfo } from './types';

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

const updateNoteApi = (id: number, payload: UpdatedNoteInfo) =>
  axios.patch(HOST + `/notes/${id}/`, { contents: payload.contents });

function* updateNoteAsync({ payload }: ReturnType<typeof updateNote.request>) {
  try {
    const res = yield call(updateNoteApi, payload.id, payload);
    yield put(updateNote.success(res.data));
  } catch (e) {
    yield put(updateNote.failure());
  }
}

const deleteNoteApi = (id: number) => axios.delete(HOST + `/notes/${id}/`);

function* deleteNoteAsync({ payload }: ReturnType<typeof deleteNote.request>) {
  try {
    yield call(deleteNoteApi, payload.id);

    yield put(deleteNote.success(payload.id));
  } catch (e) {
    yield put(deleteNote.failure());
  }
}

const createConnectionApi = (payload: ConnectionInfo) => axios.post(HOST + '/connections/', payload);

function* createConnectionAsync({ payload }: ReturnType<typeof createConnection.request>) {
  try {
    const res = yield call(createConnectionApi, payload);
    yield put(createConnection.success(res.data));
  } catch (e) {
    yield put(createConnection.failure());
  }
}

const updateConnectionApi = (payload: UpdatedConnectionInfo) => axios.patch(HOST + `/connections/${payload.id}/`, payload);

function* updateConnectionAsync({ payload }: ReturnType<typeof updateConnection.request>) {
  try {
    const res = yield call(updateConnectionApi, payload);

    yield put(updateConnection.success(res.data));
  } catch (e) {
    yield put(updateConnection.failure());
  }
}

const deleteConnectionApi = (id: number) => axios.delete(HOST + `/connections/${id}/`);

function* deleteConnectionAsync({ payload }: ReturnType<typeof deleteConnection.request>) {
  try {
    yield call(deleteConnectionApi, payload.id);
    yield put(deleteConnection.success(payload.id));
  } catch (e) {
    yield put(deleteConnection.failure());
  }
}

export function* watchArticleDetail() {
  yield takeEvery(FETCH_ARTICLE_DETAIL_REQUEST, fetchArticleDetailAsync);
  yield takeEvery(CREATE_NOTE_REQUEST, createNoteAsync);
  yield takeEvery(UPDATE_NOTE_REQUEST, updateNoteAsync);
  yield takeEvery(DELETE_NOTE_REQUEST, deleteNoteAsync);
  yield takeEvery(CREATE_CONNECTION_REQUEST, createConnectionAsync);
  yield takeEvery(UPDATE_CONNECTION_REQUEST, updateConnectionAsync);
  yield takeEvery(DELETE_CONNECTION_REQUEST, deleteConnectionAsync);
}

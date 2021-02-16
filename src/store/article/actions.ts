import { createAsyncAction } from 'typesafe-actions';

import { NoteId, ArticleDetail, NoteInfo, NoteResponse, ConnectionInfo, ConnectionResponse, ConnectionId } from './types';

export const FETCH_ARTICLE_DETAIL_REQUEST = 'article/FETCH_ARTICLE_DETAIL_REQUEST';
export const FETCH_ARTICLE_DETAIL_SUCCESS = 'article/FETCH_ARTICLE_DETAIL_SUCCESS';
export const FETCH_ARTICLE_DETAIL_FAILURE = 'aritcle/FETCH_ARTICLE_DETAIL_FAILURE';

export const CREATE_NOTE_REQUEST = 'article/CREATE_NOTE_REQUEST';
export const CREATE_NOTE_SUCCESS = 'aritcle/CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_FAILURE = 'article/CREATE_NOTE_FAILURE';

export const DELETE_NOTE_REQUEST = 'article/DELETE_NOTE_REQUEST';
export const DELETE_NOTE_SUCCESS = 'article/DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'article/DELETE_NOTE_FAILURE';

export const CREATE_CONNECTION_REQUEST = 'article/CREATE_CONNECTION_REQUEST';
export const CREATE_CONNECTION_SUCCESS = 'article/CREATE_CONNECTION_SUCCESS';
export const CREATE_CONNECTION_FAILURE = 'article/CREATE_CONNECTION_FAILURE';

export const DELETE_CONNECTION_REQUEST = 'article/DELETE_CONNECTION_REQUEST';
export const DELETE_CONNECTION_SUCCESS = 'article/DELETE_CONNECTION_SUCCESS';
export const DELETE_CONNECTION_FAILURE = 'article/DELETE_CONNECTION_FAILURE';

export const fetchArticleDetail = createAsyncAction(
  FETCH_ARTICLE_DETAIL_REQUEST,
  FETCH_ARTICLE_DETAIL_SUCCESS,
  FETCH_ARTICLE_DETAIL_FAILURE
)<number, ArticleDetail, void>();

export const createNote = createAsyncAction(CREATE_NOTE_REQUEST, CREATE_NOTE_SUCCESS, CREATE_NOTE_FAILURE)<
  NoteInfo,
  NoteResponse,
  void
>();

export const deleteNote = createAsyncAction(DELETE_NOTE_REQUEST, DELETE_NOTE_SUCCESS, DELETE_NOTE_FAILURE)<
  NoteId,
  number,
  void
>();

export const createConnection = createAsyncAction(
  CREATE_CONNECTION_REQUEST,
  CREATE_CONNECTION_SUCCESS,
  CREATE_CONNECTION_FAILURE
)<ConnectionInfo, ConnectionResponse, void>();

export const deleteConnection = createAsyncAction(
  DELETE_CONNECTION_REQUEST,
  DELETE_CONNECTION_SUCCESS,
  DELETE_CONNECTION_FAILURE
)<ConnectionId, number, void>();

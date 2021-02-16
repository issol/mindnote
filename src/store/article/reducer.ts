import { createReducer } from 'typesafe-actions';

import {
  FETCH_ARTICLE_DETAIL_SUCCESS,
  FETCH_ARTICLE_DETAIL_FAILURE,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILURE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
  CREATE_CONNECTION_SUCCESS,
  CREATE_CONNECTION_FAILURE,
  DELETE_CONNECTION_SUCCESS,
  DELETE_CONNECTION_FAILURE,
} from './actions';

import { ArticleDetailState, ArticleDetailAction } from './types';

const initialState: ArticleDetailState = {
  articleDetail: {
    subject: '',
    description: '',
    notes: [],
    connections: [],
  },
  noteList: [],
  connectionList: [],
};

const articleDetailReducer = createReducer<ArticleDetailState, ArticleDetailAction>(initialState, {
  [FETCH_ARTICLE_DETAIL_SUCCESS]: (state, action) => ({
    ...state,
    articleDetail: action.payload,
    noteList: action.payload.notes,
    connectionList: action.payload.connections,
  }),
  [FETCH_ARTICLE_DETAIL_FAILURE]: (state) => ({
    ...state,
  }),

  [CREATE_NOTE_SUCCESS]: (state, action) => ({
    ...state,
    noteList: [...state.noteList, action.payload],
  }),
  [CREATE_NOTE_FAILURE]: (state) => ({
    ...state,
  }),
  [DELETE_NOTE_SUCCESS]: (state, action) => ({
    ...state,
    noteList: state.noteList.filter((note) => note.id !== action.payload),
  }),
  [DELETE_NOTE_FAILURE]: (state) => ({
    ...state,
  }),
  [CREATE_CONNECTION_SUCCESS]: (state, action) => ({
    ...state,
    connectionList: [...state.connectionList, action.payload],
  }),
  [CREATE_CONNECTION_FAILURE]: (state) => ({
    ...state,
  }),
  [DELETE_CONNECTION_SUCCESS]: (state, action) => ({
    ...state,
    connectionList: state.connectionList.filter((connection) => connection.id !== action.payload),
  }),
  [DELETE_CONNECTION_FAILURE]: (state) => ({
    ...state,
  }),
});

export default articleDetailReducer;

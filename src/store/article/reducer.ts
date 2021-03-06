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
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILURE,
  UPDATE_CONNECTION_SUCCESS,
} from './actions';

import { ArticleDetailState, ArticleDetailAction } from './types';

const initialState: ArticleDetailState = {
  articleDetail: {
    subject: '',
    description: '',
    body: '',
    notes: [],
    connections: [],
  },
};

const articleDetailReducer = createReducer<ArticleDetailState, ArticleDetailAction>(initialState, {
  [FETCH_ARTICLE_DETAIL_SUCCESS]: (state, action) => ({
    ...state,
    articleDetail: action.payload,
  }),
  [FETCH_ARTICLE_DETAIL_FAILURE]: (state) => ({
    ...state,
  }),

  [CREATE_NOTE_SUCCESS]: (state, action) => ({
    ...state,
    articleDetail: {
      ...state.articleDetail,
      notes: [...state.articleDetail.notes, action.payload],
    },
  }),
  [CREATE_NOTE_FAILURE]: (state) => ({
    ...state,
  }),

  [UPDATE_NOTE_SUCCESS]: (state, action) => ({
    ...state,
    articleDetail: {
      ...state.articleDetail,
      notes: state.articleDetail.notes.map((note) => (note.id === action.payload.id ? action.payload : note)),
    },
  }),
  [UPDATE_NOTE_FAILURE]: (state) => ({
    ...state,
  }),

  [DELETE_NOTE_SUCCESS]: (state, action) => ({
    ...state,
    articleDetail: {
      ...state.articleDetail,
      notes: state.articleDetail.notes.filter((note) => note.id !== action.payload),
    },
  }),
  [DELETE_NOTE_FAILURE]: (state) => ({
    ...state,
  }),

  [CREATE_CONNECTION_SUCCESS]: (state, action) => ({
    ...state,
    articleDetail: {
      ...state.articleDetail,
      connections: [...state.articleDetail.connections, action.payload],
    },
  }),
  [CREATE_CONNECTION_FAILURE]: (state) => ({
    ...state,
  }),

  [UPDATE_CONNECTION_SUCCESS]: (state, action) => ({
    ...state,
    articleDetail: {
      ...state.articleDetail,
      connections: state.articleDetail.connections.map((connection) =>
        connection.id === action.payload.id ? action.payload : connection
      ),
    },
  }),

  [DELETE_CONNECTION_SUCCESS]: (state, action) => ({
    ...state,
    articleDetail: {
      ...state.articleDetail,
      connections: state.articleDetail.connections.filter((connection) => connection.id !== action.payload),
    },
  }),
  [DELETE_CONNECTION_FAILURE]: (state) => ({
    ...state,
  }),
});

export default articleDetailReducer;

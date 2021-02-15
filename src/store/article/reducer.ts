import { createReducer } from 'typesafe-actions';

import {
  FETCH_ARTICLE_DETAIL_SUCCESS,
  FETCH_ARTICLE_DETAIL_FAILURE,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILURE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
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
});

export default articleDetailReducer;

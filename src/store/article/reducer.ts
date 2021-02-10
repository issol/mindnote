import { createReducer } from 'typesafe-actions';

import { FETCH_ARTICLE_DETAIL_SUCCESS, FETCH_ARTICLE_DETAIL_FAILURE, CREATE_NOTE_SUCCESS, CREATE_NOTE_FAILURE } from './actions';

import { ArticleDetailState, ArticleDetailAction } from './types';

const initialState: ArticleDetailState = {
  articleDetail: {
    subject: '',
    description: '',
    notes: [],
  },
  noteInfo: {
    id: 0,
    contents: '',
    createdAt: '',
    updatedAt: '',
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
    noteInfo: action.payload,
  }),
  [CREATE_NOTE_FAILURE]: (state) => ({
    ...state,
  }),
});

export default articleDetailReducer;

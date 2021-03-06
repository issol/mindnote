import { createReducer } from 'typesafe-actions';

import {
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
  DELETE_ARTICLE_SUCCESS,
  FETCH_ARTICLE_LIST_FAILURE,
  FETCH_ARTICLE_LIST_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
  UPDATE_ARTICLE_SUCCESS,
} from './actions';

import { ArticleAction, ArticleState } from './types';

const initialState: ArticleState = {
  articleInfo: {
    subject: '',
    description: '',
    body: '',
  },
  articleList: [],
};

const articleReducer = createReducer<ArticleState, ArticleAction>(initialState, {
  [CREATE_ARTICLE_SUCCESS]: (state, action) => ({
    ...state,
    articleInfo: {
      ...state.articleInfo,
      ...action.payload,
    },
    articleList: [...state.articleList, action.payload],
  }),
  [CREATE_ARTICLE_FAILURE]: (state) => ({
    ...state,
  }),
  [FETCH_ARTICLE_LIST_SUCCESS]: (state, action) => ({
    ...state,
    articleList: action.payload,
  }),
  [FETCH_ARTICLE_LIST_FAILURE]: (state) => ({
    ...state,
  }),
  [UPDATE_ARTICLE_SUCCESS]: (state, action) => ({
    ...state,
    articleList: state.articleList.map((article) => (article.id === action.payload.id ? action.payload : article)),
  }),
  [UPDATE_ARTICLE_FAILURE]: (state) => ({
    ...state,
  }),

  [DELETE_ARTICLE_SUCCESS]: (state, action) => ({
    ...state,
    articleList: state.articleList.filter((article) => article.id !== action.payload),
  }),
  [DELETE_ARTICLE_FAILURE]: (state) => ({
    ...state,
  }),
});

export default articleReducer;

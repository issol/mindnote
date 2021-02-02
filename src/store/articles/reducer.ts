import { createReducer } from 'typesafe-actions';
import {
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS,
  FETCH_ARTICLE_LIST_FAILURE,
  FETCH_ARTICLE_LIST_SUCCESS,
} from './actions';

import { ArticleAction, ArticleState } from './types';

const initialState: ArticleState = {
  articleInfo: {
    title: '',
    description: '',
    user: 0,
  },

  articleList: [],
};

const articleReducer = createReducer<ArticleState, ArticleAction>(
  initialState,
  {
    [CREATE_ARTICLE_SUCCESS]: (state, action) => ({
      ...state,
      articleInfo: {
        ...state.articleInfo,
        ...action.payload,
      },
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
  }
);

export default articleReducer;

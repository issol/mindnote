import { createReducer } from 'typesafe-actions';
import {
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS,
  SET_CREATE_ARTICLE_INFO,
} from './actions';

import { ArticleState, ArticleAction } from './types';

const initialState: ArticleState = {
  articleInfo: {
    title: '',
    description: '',
    user: '',
  },
};

const articleReducer = createReducer<ArticleState, ArticleAction>(
  initialState,
  {
    [SET_CREATE_ARTICLE_INFO]: (state, action) => ({
      ...state,
      articleInfo: {
        ...state.articleInfo,
        ...action.payload,
      },
    }),
    [CREATE_ARTICLE_SUCCESS]: (state) => ({
      ...state,
    }),
    [CREATE_ARTICLE_FAILURE]: (state) => ({
      ...state,
    }),
  }
);

export default articleReducer;

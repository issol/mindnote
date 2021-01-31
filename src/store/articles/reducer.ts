import { createReducer } from 'typesafe-actions';
import { CREATE_ARTICLE_FAILURE, CREATE_ARTICLE_SUCCESS } from './actions';

import { ArticleState, ArticleAction } from './types';

const initialState: ArticleState = {
  articleInfo: {
    title: '',
    description: '',
    user: 0,
  },
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
  }
);

export default articleReducer;

import { createAsyncAction } from 'typesafe-actions';
import { ArticleInfo, CreateArticleRequestPayload } from './types';

export const CREATE_ARTICLE_REQUEST = 'articles/CREATE_ARTICLE_REQUEST';
export const CREATE_ARTICLE_SUCCESS = 'articles/CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_FAILURE = 'articles/CREATE_ARTICLE_FAILURE';

export const createArticle = createAsyncAction(
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE
)<ArticleInfo, CreateArticleRequestPayload, string>();

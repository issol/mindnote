import { createAction, createAsyncAction } from 'typesafe-actions';
import { ArticleInfo, SetAritcleInfoPayload } from './types';

export const CREATE_ARTICLE_REQUEST = 'articles/CREATE_ARTICLE_REQUEST';
export const CREATE_ARTICLE_SUCCESS = 'articles/CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_FAILURE = 'articles/CREATE_ARTICLE_FAILURE';
export const SET_CREATE_ARTICLE_INFO = 'articles/SET_CREATE_ARTICLE_INFO';

export const createArticle = createAsyncAction(
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE
)<ArticleInfo, void, string>();

export const setArticleInfo = createAction(
  SET_CREATE_ARTICLE_INFO
)<SetAritcleInfoPayload>();

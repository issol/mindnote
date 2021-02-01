import { createAsyncAction } from 'typesafe-actions';
import { ArticleInfo, ArticleType, CreateArticleRequestPayload } from './types';


export const CREATE_ARTICLE_REQUEST = 'articles/CREATE_ARTICLE_REQUEST';
export const CREATE_ARTICLE_SUCCESS = 'articles/CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_FAILURE = 'articles/CREATE_ARTICLE_FAILURE';

export const FETCH_ARTICLE_LIST_REQUEST = 'articles/FETCH_ARTICLE_LIST_REQUEST';
export const FETCH_ARTICLE_LIST_SUCCESS = 'articles/FETCH_ARTICLE_LIST_SUCCESS';
export const FETCH_ARTICLE_LIST_FAILURE = 'articles/FETCH_ARTICLE_LIST_FAILURE';


export const createArticle = createAsyncAction(
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
)<ArticleInfo, CreateArticleRequestPayload, string>();

export const fetchArticleList = createAsyncAction(
  FETCH_ARTICLE_LIST_REQUEST,
  FETCH_ARTICLE_LIST_SUCCESS,
  FETCH_ARTICLE_LIST_FAILURE,
)<void, ArticleType[], string>();

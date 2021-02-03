import { createAsyncAction } from 'typesafe-actions';
import {
  ArticleInfo,
  ArticleType,
  CreateArticleRequestPayload,
  UpdateArticleRequestPayload,
} from './types';

export const CREATE_ARTICLE_REQUEST = 'articles/CREATE_ARTICLE_REQUEST';
export const CREATE_ARTICLE_SUCCESS = 'articles/CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_FAILURE = 'articles/CREATE_ARTICLE_FAILURE';

export const FETCH_ARTICLE_LIST_REQUEST = 'articles/FETCH_ARTICLE_LIST_REQUEST';
export const FETCH_ARTICLE_LIST_SUCCESS = 'articles/FETCH_ARTICLE_LIST_SUCCESS';
export const FETCH_ARTICLE_LIST_FAILURE = 'articles/FETCH_ARTICLE_LIST_FAILURE';

export const DELETE_ARTICLE_REQUEST = 'articles/DELETE_ARTICLE_REQUEST';
export const DELETE_ARTICLE_SUCCESS = 'articles/DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_FAILURE = 'artilces/DELETE_ARTICLE_FAILURE';

export const UPDATE_ARTICLE_REQUEST = 'articles/UPDATE_ARTICLE_REQUEST';
export const UPDATE_ARTICLE_SUCCESS = 'articles/UPDATE_ARTICLE_SUCCESS';
export const UPDATE_ARTICLE_FAILURE = 'articles/UPDATE_ARTICLE_FAILURE';

export const createArticle = createAsyncAction(
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE
)<ArticleInfo, CreateArticleRequestPayload, string>();

export const fetchArticleList = createAsyncAction(
  FETCH_ARTICLE_LIST_REQUEST,
  FETCH_ARTICLE_LIST_SUCCESS,
  FETCH_ARTICLE_LIST_FAILURE
)<void, ArticleType[], string>();

export const deleteArticle = createAsyncAction(
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE
)<number, void, void>();

export const updateArticle = createAsyncAction(
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE
)<ArticleType[], UpdateArticleRequestPayload, string>();

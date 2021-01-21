import { ArticleInfo } from './types';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createArticle, CREATE_ARTICLE_REQUEST } from './actions';
import { HOST } from 'constants/requests';

const CreateArticleApi = (payload: ArticleInfo) =>
  axios.post(HOST + '/articles', payload);

import { createAsyncAction } from 'typesafe-actions';
import { ArticleDetail, NoteInfo, NoteRequestPayload } from './types';

export const FETCH_ARTICLE_DETAIL_REQUEST = 'article/FETCH_ARTICLE_DETAIL_REQUEST';
export const FETCH_ARTICLE_DETAIL_SUCCESS = 'article/FETCH_ARTICLE_DETAIL_SUCCESS';
export const FETCH_ARTICLE_DETAIL_FAILURE = 'aritcle/FETCH_ARTICLE_DETAIL_FAILURE';

export const CREATE_NOTE_REQUEST = 'article/CREATE_NOTE_REQUEST';
export const CREATE_NOTE_SUCCESS = 'aritcle/CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_FAILURE = 'article/CREATE_NOTE_FAILURE';
 
export const fetchArticleDetail = createAsyncAction(
    FETCH_ARTICLE_DETAIL_REQUEST,
    FETCH_ARTICLE_DETAIL_SUCCESS,
    FETCH_ARTICLE_DETAIL_FAILURE
)<number, ArticleDetail, void>();

export const createNote = createAsyncAction(
    CREATE_NOTE_REQUEST,
    CREATE_NOTE_SUCCESS,
    CREATE_NOTE_FAILURE,
)<NoteInfo, NoteRequestPayload, void>();


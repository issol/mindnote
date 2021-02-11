import { ActionType } from 'typesafe-actions';
import { createNote, fetchArticleDetail } from './actions';

export type ArticleDetail = {
  subject: string;
  description: string;
  notes: [];
};

export type NoteResponse = {
  article: number;
  contents: string;
  createdAt: string;
  id: number;
  updatedAt: string;
};

export type NoteInfo = {
  article: number;
  contents: string;
};

export type ArticleDetailState = {
  articleDetail: ArticleDetail;
  noteList: NoteResponse[];
};

export type ArticleDetailAction = ActionType<typeof fetchArticleDetail> | ActionType<typeof createNote>;

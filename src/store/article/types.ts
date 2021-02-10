import { ActionType } from 'typesafe-actions';
import { createNote, fetchArticleDetail } from './actions';

export type ArticleDetail = {
  subject: string;
  description: string;
  notes: [];
};

export type NoteRequestPayload = {
  id: number;
  contents: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteInfo = {
  article: number;
  contents: string;
};

export type ArticleDetailState = {
  articleDetail: ArticleDetail;
  noteInfo: NoteRequestPayload;
};

export type ArticleDetailAction = ActionType<typeof fetchArticleDetail> | ActionType<typeof createNote>;

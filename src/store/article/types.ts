import { ActionType } from 'typesafe-actions';
import { createNote, deleteNote, fetchArticleDetail } from './actions';

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

export type ArticleNoteId = {
  id: number;
};

export type ArticleDetailState = {
  articleDetail: ArticleDetail;
  noteList: NoteResponse[];
};

export type ArticleDetailAction =
  | ActionType<typeof fetchArticleDetail>
  | ActionType<typeof createNote>
  | ActionType<typeof deleteNote>;

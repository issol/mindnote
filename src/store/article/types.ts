import { ActionType } from 'typesafe-actions';
import { createNote, deleteNote, fetchArticleDetail } from './actions';

export type ArticleDetail = {
  subject: string;
  description: string;
  notes: [];
  connections: [];
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

export type ConnectionResponse = {
  article: number;
  createdAt: string;
  id: number;
  leftNote: number;
  reason: string;
  rightNote: number;
  updatedAt: string;
};

export type ConnectionInfo = {
  leftNote: number;
  rightNote: number;
  reason: string;
};

export type ArticleNoteId = {
  id: number;
};

export type ArticleDetailState = {
  articleDetail: ArticleDetail;
  noteList: NoteResponse[];
  connectionList: ConnectionResponse[];
};

export type ArticleDetailAction =
  | ActionType<typeof fetchArticleDetail>
  | ActionType<typeof createNote>
  | ActionType<typeof deleteNote>;

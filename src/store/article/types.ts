import { updateArticle } from 'store/articleList/actions';
import { ActionType } from 'typesafe-actions';
import {
  createConnection,
  createNote,
  deleteConnection,
  deleteNote,
  fetchArticleDetail,
  updateConnection,
  updateNote,
} from './actions';

export type ArticleDetail = {
  subject: string;
  description: string;
  body: string;
  notes: NoteResponse[];
  connections: ConnectionResponse[];
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

export type UpdatedNoteInfo = {
  article: number;
  id: number;
  contents: string;
};

export type NoteId = {
  id: number;
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
  article: number;
  leftNote: number;
  rightNote: number;
  reason: string;
};

export type UpdatedConnectionInfo = {
  id: number;
  article: number;
  leftNote: number;
  rightNote: number;
  reason: string;
};

export type ConnectionId = {
  id: number;
};

export type ArticleDetailState = {
  isExistNote: boolean | null;
  articleDetail: ArticleDetail;
};

export type ArticleDetailAction =
  | ActionType<typeof fetchArticleDetail>
  | ActionType<typeof updateArticle>
  | ActionType<typeof createNote>
  | ActionType<typeof updateNote>
  | ActionType<typeof deleteNote>
  | ActionType<typeof createConnection>
  | ActionType<typeof updateConnection>
  | ActionType<typeof deleteConnection>;

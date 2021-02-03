import { ActionType } from 'typesafe-actions';
import {
  createArticle,
  deleteArticle,
  fetchArticleList,
  updateArticle,
} from './actions';

export type ArticleInfo = {
  title: string;
  description: string;
  user: number;
};

export type CreateArticleRequestPayload = {
  title: string;
  description: string;
};

export type UpdateArticleRequestPayload = {
  id: number;
  subject: string;
  description: string;
  updatedAt: string;
};

export type ArticleType = {
  id: number;
  user: number;
  subject: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ArticleState = {
  articleInfo: ArticleInfo;
  articleList: ArticleType[];
};

export type ArticleAction =
  | ActionType<typeof createArticle>
  | ActionType<typeof fetchArticleList>
  | ActionType<typeof deleteArticle>
  | ActionType<typeof updateArticle>;

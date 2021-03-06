import { ActionType } from 'typesafe-actions';

import { createArticle, deleteArticle, fetchArticleList, updateArticle } from './actions';

export type ArticleInfo = {
  subject: string;
  description: string;
  body: string;
};

export type UpdatedArticleInfo = {
  id: number;
  subject: string;
  description: string;
  body: string;
};

export type ArticleResponse = {
  id: number;
  user: number;
  subject: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

export type ArticleState = {
  articleInfo: ArticleInfo;
  articleList: ArticleResponse[];
};

export type ArticleAction =
  | ActionType<typeof createArticle>
  | ActionType<typeof fetchArticleList>
  | ActionType<typeof deleteArticle>
  | ActionType<typeof updateArticle>;

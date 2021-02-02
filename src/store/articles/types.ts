import { ActionType } from 'typesafe-actions';
import { createArticle, fetchArticleList } from './actions';

export type ArticleInfo = {
  title: string;
  description: string;
  user: number;
};

export type CreateArticleRequestPayload = {
  title: string;
  description: string;
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
  | ActionType<typeof fetchArticleList>;

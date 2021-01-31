import { ActionType } from 'typesafe-actions';
import { createArticle } from './actions';

export type ArticleInfo = {
  title: string;
  description: string;
  user: number;
};

export type CreateArticleRequestPayload = {
  title: string;
  description: string;
};

export type ArticleState = {
  articleInfo: ArticleInfo;
};

export type ArticleAction = ActionType<typeof createArticle>;

import { ActionType } from 'typesafe-actions';
import { createArticle, setArticleInfo } from './actions';

export type ArticleInfo = {
  title: string;
  description: string;
  user: string;
};

export type SetAritcleInfoPayload = Partial<ArticleInfo>;

export type ArticleState = {
  articleInfo: ArticleInfo;
};

export type ArticleAction =
  | ActionType<typeof createArticle>
  | ActionType<typeof setArticleInfo>;

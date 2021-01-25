import Navigation from 'components/Navigation';
import React from 'react';
import { ArticleState } from 'store/articles/types';

type HomeType = {
  createArticle: React.MouseEventHandler<HTMLButtonElement>;
  articleReducer: ArticleState;
};

const HomePresenter = ({ createArticle, articleReducer }: HomeType) => {
  return (
    <>
      <Navigation />
      <button type="button" onClick={createArticle}>
        +
      </button>
      <div>{articleReducer.articleInfo.title}</div>
      <div>{articleReducer.articleInfo.description}</div>
      <div>{articleReducer.articleInfo.user}</div>
    </>
  );
};

export default HomePresenter;

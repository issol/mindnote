import Navigation from 'components/Navigation';
import React from 'react';
import { ArticleType } from 'store/articles/types';

type HomeType = {
  articleList: ArticleType[];
};

const HomePresenter = ({ articleList }: HomeType) => {
  return (
    <>
      <Navigation />

      {articleList.map((article) => {
        return <div key={article.id}>{article.subject}</div>;
      })}
    </>
  );
};

export default HomePresenter;

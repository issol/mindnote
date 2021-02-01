import Navigation from 'components/Navigation';
import React from 'react';
import { ArticleType } from 'store/articles/types';


type HomeType = {
  createArticle: React.MouseEventHandler<HTMLButtonElement>;
  articleList: ArticleType[];
};

const HomePresenter = ({ createArticle, articleList }: HomeType) => {
  return (
    <>
      <Navigation />

      <button type="button" onClick={createArticle}>
        +
      </button>
      {
        articleList.map((article) => {
          return <div key={article.id}>{article.subject}</div>;
        })
      }
    </>
  );
};

export default HomePresenter;

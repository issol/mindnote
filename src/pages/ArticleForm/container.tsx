import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { createArticle } from 'store/articles/actions';
import ArticleFormPresenter from './presenter';

const ArticleFormContainer = () => {
  const dispatch = useDispatch();

  const articleReducer = useSelector(
    (state: RootState) => state.articleReducer
  );

  const hadleCreateArticle = () => {
    dispatch(createArticle.request(articleReducer.articleInfo));
  };

  return <ArticleFormPresenter hadleSaveArticle={hadleCreateArticle} />;
};

export default ArticleFormContainer;

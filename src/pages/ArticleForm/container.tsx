import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';
import { createArticle, setArticleInfo } from 'store/articles/actions';
import ArticleFormPresenter from './presenter';

const ArticleFormContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const articleReducer = useSelector(
    (state: RootState) => state.articleReducer
  );

  const hadleCreateArticle = () => {
    dispatch(createArticle.request(articleReducer.articleInfo));
    history.push('/home');
  };

  const changeTitle = (value: string) => {
    dispatch(setArticleInfo({ title: value }));
  };

  const changeDescription = (value: string) => {
    dispatch(setArticleInfo({ description: value }));
  };

  return (
    <ArticleFormPresenter
      articleReducer={articleReducer}
      changeTitle={changeTitle}
      changeDescription={changeDescription}
      hadleSaveArticle={hadleCreateArticle}
    />
  );
};

export default ArticleFormContainer;

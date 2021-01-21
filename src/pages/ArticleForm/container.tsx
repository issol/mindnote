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
  const userReducer = useSelector((state: RootState) => state.userReducer);

  const HadleSaveArticle = () => {
    dispatch(createArticle.request(articleReducer.articleInfo));
    history.push('/home');
  };
  const ChangeTitle = (value: string) => {
    dispatch(setArticleInfo({ title: value, user: 'issol' }));
  };
  const ChangeDescription = (value: string) => {
    dispatch(setArticleInfo({ description: value }));
  };

  return (
    <ArticleFormPresenter
      articleReducer={articleReducer}
      ChangeTitle={ChangeTitle}
      ChangeDescription={ChangeDescription}
      HadleSaveArticle={HadleSaveArticle}
    />
  );
};

export default ArticleFormContainer;

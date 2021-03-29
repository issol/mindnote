import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';
import { fetchArticleList } from 'store/articleList/actions';
import MyArticlePresenter from './presenter';

const MyArticleContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const articleReducer = useSelector((state: RootState) => state.articleReducer);

  const articleList = articleReducer.articleList.filter((article) => article.body !== '');

  const handleMovePublishedArticlePage = (id: number) => {
    history.push(`/published-article/${id}`);
  };

  useEffect(() => {
    dispatch(fetchArticleList.request());
  }, [dispatch]);

  return (
    <MyArticlePresenter
      articleList={articleList}
      handleMovePublishedArticlePage={handleMovePublishedArticlePage}
    ></MyArticlePresenter>
  );
};

export default MyArticleContainer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { fetchArticleList } from 'store/articleList/actions';
import MyArticlePresenter from './presenter';

const MyArticleContainer = () => {
  const dispatch = useDispatch();
  const articleReducer = useSelector((state: RootState) => state.articleReducer);

  const articleList = articleReducer.articleList.filter((article) => article.body !== '');

  useEffect(() => {
    dispatch(fetchArticleList.request());
  }, [dispatch]);

  return <MyArticlePresenter articleList={articleList}></MyArticlePresenter>;
};

export default MyArticleContainer;

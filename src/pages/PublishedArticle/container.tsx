import MarkdownIt from 'markdown-it';
import { ParamType } from 'pages/ArticleDetail/container';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import { fetchArticleDetail } from 'store/article/actions';
import PublishedArticlePresenter from './presenter';

const PublishedArticleContainer = () => {
  const articleId = Number(useParams<ParamType>().id);
  const dispatch = useDispatch();
  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);

  const mdParser = new MarkdownIt();

  useEffect(() => {
    dispatch(fetchArticleDetail.request(articleId));
  }, [dispatch, articleId]);

  return <PublishedArticlePresenter articleDetail={articleDetailReducer.articleDetail} mdParser={mdParser} />;
};

export default PublishedArticleContainer;

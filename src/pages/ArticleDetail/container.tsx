import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { RootState } from 'store';
import { fetchArticleDetail } from 'store/article/actions';
import { updateArticle } from 'store/articleList/actions';
import ArticleDetailPresenter from './presenter';

export type ArticleFormType = {
  subject: string;
  description: string;
};

export type ParamType = {
  id: string;
};

const ArticleDetailContainer = () => {
  const articleId = Number(useParams<ParamType>().id);

  const dispatch = useDispatch();
  const history = useHistory();

  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);

  const {
    register: articleFormRegister,
    handleSubmit: articleHandleSubmit,
    setValue: articleSetValue,
  } = useForm<ArticleFormType>();

  const handleUpdateArticleInfo = (data: ArticleFormType) => {
    dispatch(updateArticle.request({ id: articleId, ...data }));
  };

  const handleRedirectWriteArtilcePage = () => {
    history.push(`/write-article/${articleId}`);
  };

  useEffect(() => {
    dispatch(fetchArticleDetail.request(articleId));
  }, [dispatch, articleId]);

  useEffect(() => {
    articleSetValue('subject', articleDetailReducer.articleDetail.subject);
    articleSetValue('description', articleDetailReducer.articleDetail.description);
  }, [articleSetValue, articleDetailReducer.articleDetail]);

  return (
    <>
      <ArticleDetailPresenter
        articleFormRegister={articleFormRegister}
        articleHandleSubmit={articleHandleSubmit}
        handleUpdateArticleInfo={handleUpdateArticleInfo}
        handleRedirectWriteArtilcePage={handleRedirectWriteArtilcePage}
        articleId={articleId}
      />
    </>
  );
};

export default ArticleDetailContainer;

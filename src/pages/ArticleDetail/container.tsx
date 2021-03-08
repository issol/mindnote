import { ConnectionFormType, NoteFormType } from 'modules/NoteGraph/container';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { fetchArticleDetail } from 'store/article/actions';
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

  const handleRedirectWriteArtilcePage = () => {
    history.push(`/write-article/${articleId}`);
  };

  useEffect(() => {
    dispatch(fetchArticleDetail.request(articleId));
  }, [dispatch, articleId]);

  return (
    <>
      <ArticleDetailPresenter handleRedirectWriteArtilcePage={handleRedirectWriteArtilcePage} articleId={articleId} />
    </>
  );
};

export default ArticleDetailContainer;

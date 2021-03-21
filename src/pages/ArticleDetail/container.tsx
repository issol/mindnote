import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from 'store';

import { fetchArticleDetail } from 'store/article/actions';
import ArticleDetailPresenter from './presenter';

import Swal from 'sweetalert2';

export type ArticleFormType = {
  subject: string;
  description: string;
};

export type ParamType = {
  id: string;
};

const ArticleDetailContainer = () => {
  const articleId = Number(useParams<ParamType>().id);
  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRedirectWriteArtilcePage = () => {
    history.push(`/write-article/${articleId}`);
  };

  useEffect(() => {
    if (articleDetailReducer.isExistNote === null) {
      Swal.fire('우클릭으로 노트를 추가해보세요!', '');
    }
  }, [articleDetailReducer.isExistNote]);

  useEffect(() => {
    dispatch(fetchArticleDetail.request(articleId));
  }, [dispatch, articleId]);

  return <ArticleDetailPresenter handleRedirectWriteArtilcePage={handleRedirectWriteArtilcePage} articleId={articleId} />;
};

export default ArticleDetailContainer;

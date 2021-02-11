import { features } from 'process';
import React, { useEffect, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { fetchArticleDetail } from 'store/article/actions';
import { fetchArticleList, updateArticle } from 'store/articles/actions';

import { ArticleInfo } from 'store/articles/types';
import WriteArticlePresenter from './presenter';

type Props = {
  subject: string;
  description: string;
};

const WriteArticleContainer = ({ match }) => {
  const dispatch = useDispatch();

  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);

  const articleId = match.params.id;

  const { register, handleSubmit, errors, setValue } = useForm<Props>();

  const handleUpdateArticleInfo = (data: any) => {
    dispatch(updateArticle.request({ id: articleId, subject: data.subject, description: data.description }));
  };

  const handleCreateNote = (data: any) => {};

  useEffect(() => {
    dispatch(fetchArticleDetail.request(articleId));
  }, [dispatch, fetchArticleList]);

  useEffect(() => {
    setValue('subject', articleDetailReducer.articleDetail.subject);
    setValue('description', articleDetailReducer.articleDetail.description);
  }, [articleDetailReducer.articleDetail]);

  return (
    <WriteArticlePresenter
      articleNoteList={articleDetailReducer.articleDetail.notes}
      register={register}
      handleSubmit={handleSubmit}
      handleUpdateArticleInfo={handleUpdateArticleInfo}
      handleCreateNote={handleCreateNote}
      errors={errors}
    />
  );
};

export default WriteArticleContainer;

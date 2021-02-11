import { features } from 'process';
import React, { useEffect, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { RootState } from 'store';
import { createNote, fetchArticleDetail } from 'store/article/actions';
import { fetchArticleList, updateArticle } from 'store/articles/actions';
import articleReducer from 'store/articles/reducer';
import WriteArticlePresenter from './presenter';

type ArticleProps = {
  id: number;
  subject: string;
  description: string;
};

type UpdateProps = {
  id: number;
  subject: string;
  description: string;
};

type NoteProps = {
  article: number;
  contents: string;
};

const WriteArticleContainer = ({ match }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const mounted = useRef(false);

  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);

  const articleId = match.params.id;

  const [updatedArticleInfo, setUpdatedArticleInfo] = useState<UpdateProps>({
    id: 0,
    subject: '',
    description: '',
  });
  const { register, handleSubmit, errors, setValue } = useForm<UpdateProps>();

  const handleUpdateArticleInfo = (data: any) => {
    setUpdatedArticleInfo({
      id: articleId,
      subject: data.subject,
      description: data.description,
    });
  };

  const handleCreateNote = (data: any) => {};

  useEffect(() => {
    dispatch(fetchArticleDetail.request(articleId));
  }, [dispatch, fetchArticleList]);

  useEffect(() => {
    dispatch(updateArticle.request(updatedArticleInfo));
    return () => {
      history.push('/article-list');
    };
  }, [updatedArticleInfo]);

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
      setValue={setValue}
    />
  );
};

export default WriteArticleContainer;

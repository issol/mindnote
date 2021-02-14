import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { createNote, deleteNote, fetchArticleDetail } from 'store/article/actions';
import { updateArticle } from 'store/articleList/actions';

import WriteArticlePresenter from './presenter';

type Props = {
  subject: string;
  description: string;
};

const WriteArticleContainer = ({ match }) => {
  const [articleId, setArticleId] = useState(match.params.id);

  const dispatch = useDispatch();

  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);
  const userReducer = useSelector((state: RootState) => state.userReducer);

  const { register, handleSubmit, errors, setValue } = useForm<Props>();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleUpdateArticleInfo = (data: any) => {
    dispatch(updateArticle.request({ id: articleId, subject: data.subject, description: data.description }));
  };

  const handleCreateNote = (data: any) => {
    setIsOpenModal(false);
    dispatch(createNote.request({ article: articleId, contents: data.content }));
  };

  const handleDeleteNote = (e: any) => {
    dispatch(deleteNote.request({ id: e.target.getAttribute('note-id'), article: articleId }));
  };

  useEffect(() => {
    if (userReducer.isLoggedIn) {
      dispatch(fetchArticleDetail.request(articleId));
    }
  }, [dispatch, fetchArticleDetail, userReducer.isLoggedIn, articleId]);

  useEffect(() => {
    setValue('subject', articleDetailReducer.articleDetail.subject);
    setValue('description', articleDetailReducer.articleDetail.description);
  }, [articleDetailReducer.articleDetail]);

  return (
    <WriteArticlePresenter
      articleNoteList={articleDetailReducer.noteList}
      register={register}
      handleSubmit={handleSubmit}
      handleCreateNote={handleCreateNote}
      handleDeleteNote={handleDeleteNote}
      handleUpdateArticleInfo={handleUpdateArticleInfo}
      errors={errors}
      isOpenModal={isOpenModal}
      setIsOpenModal={setIsOpenModal}
    />
  );
};

export default WriteArticleContainer;

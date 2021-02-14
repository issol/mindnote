import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from 'store';
import { createNote, deleteNote, fetchArticleDetail } from 'store/article/actions';
import { updateArticle } from 'store/articleList/actions';

import WriteArticlePresenter from './presenter';

export type ArticleFormType = {
  subject: string;
  description: string;
};

export type NoteFormType = {
  contents: string;
};

type ParamType = {
  id: string;
};

const ArticleDetailContainer = () => {
  const articleId = Number(useParams<ParamType>().id);

  const dispatch = useDispatch();

  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);
  const userReducer = useSelector((state: RootState) => state.userReducer);

  const {
    register: articleFormRegister,
    handleSubmit: articleHandleSubmit,
    errors: articleErrors,
    setValue: articleSetValue,
  } = useForm<ArticleFormType>();
  const {
    register: noteFormRegister,
    handleSubmit: noteHandleSubmit,
    errors: noteErrors,
    setValue: noteSetValue,
  } = useForm<NoteFormType>();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleUpdateArticleInfo = (data: ArticleFormType) => {
    dispatch(updateArticle.request({ id: articleId, ...data }));
  };

  const handleCreateNote = (data: NoteFormType) => {
    console.log(data);
    setIsOpenModal(false);
    dispatch(createNote.request({ article: articleId, contents: data.contents }));
  };

  const handleDeleteNote = (noteId: number) => () => {
    dispatch(deleteNote.request({ id: noteId }));
  };

  useEffect(() => {
    if (userReducer.isLoggedIn) {
      dispatch(fetchArticleDetail.request(articleId));
    }
  }, [dispatch, fetchArticleDetail, userReducer.isLoggedIn, articleId]);

  useEffect(() => {
    articleSetValue('subject', articleDetailReducer.articleDetail.subject);
    articleSetValue('description', articleDetailReducer.articleDetail.description);
  }, [articleDetailReducer.articleDetail]);

  return (
    <WriteArticlePresenter
      articleNoteList={articleDetailReducer.noteList}
      articleFormRegister={articleFormRegister}
      noteFormRegister={noteFormRegister}
      articleHandleSubmit={articleHandleSubmit}
      noteHandleSubmit={noteHandleSubmit}
      handleCreateNote={handleCreateNote}
      handleDeleteNote={handleDeleteNote}
      handleUpdateArticleInfo={handleUpdateArticleInfo}
      articleErrors={articleErrors}
      noteErrors={noteErrors}
      isOpenModal={isOpenModal}
      setIsOpenModal={setIsOpenModal}
    />
  );
};

export default ArticleDetailContainer;

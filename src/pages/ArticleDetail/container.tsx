import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from 'store';
import { createNote, deleteNote, fetchArticleDetail } from 'store/article/actions';
import { updateArticle } from 'store/articleList/actions';

import ArticleDetailPresenter from './presenter';

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

  const {
    register: articleFormRegister,
    handleSubmit: articleHandleSubmit,
    errors: articleErrors,
    setValue: articleSetValue,
  } = useForm<ArticleFormType>();
  const { register: noteFormRegister, handleSubmit: noteHandleSubmit } = useForm<NoteFormType>();

  const [isOpenCreateNoteModal, setIsOpenCreateNoteModal] = useState(false);

  const handleUpdateArticleInfo = (data: ArticleFormType) => {
    dispatch(updateArticle.request({ id: articleId, ...data }));
  };

  const handleCreateNote = (data: NoteFormType) => {
    setIsOpenCreateNoteModal(false);
    dispatch(createNote.request({ article: articleId, contents: data.contents }));
  };

  const handleDeleteNote = (noteId: number) => () => {
    dispatch(deleteNote.request({ id: noteId }));
  };

  useEffect(() => {
    dispatch(fetchArticleDetail.request(articleId));
  }, [dispatch, fetchArticleDetail, articleId]);

  useEffect(() => {
    console.log(articleDetailReducer.articleDetail.connections);

    articleSetValue('subject', articleDetailReducer.articleDetail.subject);
    articleSetValue('description', articleDetailReducer.articleDetail.description);
  }, [articleDetailReducer.articleDetail]);

  return (
    <ArticleDetailPresenter
      noteList={articleDetailReducer.noteList}
      connectionList={articleDetailReducer.connectionList}
      articleFormRegister={articleFormRegister}
      noteFormRegister={noteFormRegister}
      articleHandleSubmit={articleHandleSubmit}
      noteHandleSubmit={noteHandleSubmit}
      handleCreateNote={handleCreateNote}
      handleDeleteNote={handleDeleteNote}
      handleUpdateArticleInfo={handleUpdateArticleInfo}
      isOpenCreateNoteModal={isOpenCreateNoteModal}
      setIsOpenCreateNoteModal={setIsOpenCreateNoteModal}
    />
  );
};

export default ArticleDetailContainer;

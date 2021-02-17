import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from 'store';
import {
  createConnection,
  createNote,
  deleteConnection,
  deleteNote,
  fetchArticleDetail,
  updateNote,
} from 'store/article/actions';
import { UpdatedNoteInfo } from 'store/article/types';
import { updateArticle } from 'store/articleList/actions';
import ArticleDetailPresenter from './presenter';

export type ArticleFormType = {
  subject: string;
  description: string;
};

export type NoteFormType = {
  contents: string;
};

export type ConnectionFormType = {
  leftNote: number;
  rightNote: number;
  reason: string;
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
    //errors: articleErrors,
    setValue: articleSetValue,
  } = useForm<ArticleFormType>();
  const { register: noteFormRegister, handleSubmit: noteHandleSubmit, setValue: noteSetValue } = useForm<NoteFormType>();
  const { register: connectionFormRegister, handleSubmit: connectionHandleSubmit } = useForm<ConnectionFormType>();

  const [isOpenCreateNoteModal, setIsOpenCreateNoteModal] = useState(false);
  const [isOpenUpdateNoteModal, setIsOpenUpdateNoteModal] = useState(false);
  const [isOpenCreateConnectionModal, setIsOpenCreateConnectionModal] = useState(false);

  const handleUpdateArticleInfo = (data: ArticleFormType) => {
    dispatch(updateArticle.request({ id: articleId, ...data }));
  };

  const handleCreateNote = (data: NoteFormType) => {
    setIsOpenCreateNoteModal(false);
    dispatch(createNote.request({ article: articleId, contents: data.contents }));
  };

  const handleUpdateNote = (data: UpdatedNoteInfo) => {
    setIsOpenUpdateNoteModal(true);
    dispatch(updateNote.request({ id: Number(data.id), contents: data.contents }));
  };

  const handleDeleteNote = (noteId: number) => () => {
    dispatch(deleteNote.request({ id: noteId }));
  };

  const handleCreateConnection = (data: ConnectionFormType) => {
    setIsOpenCreateConnectionModal(false);
    dispatch(createConnection.request({ article: articleId, ...data }));
  };

  const handleDeleteConnection = (connectionId: number) => () => {
    dispatch(deleteConnection.request({ id: connectionId }));
  };

  useEffect(() => {
    dispatch(fetchArticleDetail.request(articleId));
  }, [dispatch, articleId]);

  useEffect(() => {
    articleSetValue('subject', articleDetailReducer.articleDetail.subject);
    articleSetValue('description', articleDetailReducer.articleDetail.description);
  }, [articleSetValue, articleDetailReducer.articleDetail]);

  return (
    <ArticleDetailPresenter
      noteList={articleDetailReducer.noteList}
      connectionList={articleDetailReducer.connectionList}
      articleFormRegister={articleFormRegister}
      noteFormRegister={noteFormRegister}
      connectionFormRegister={connectionFormRegister}
      articleHandleSubmit={articleHandleSubmit}
      noteHandleSubmit={noteHandleSubmit}
      connectionHandleSubmit={connectionHandleSubmit}
      handleCreateNote={handleCreateNote}
      handleUpdateNote={handleUpdateNote}
      handleDeleteNote={handleDeleteNote}
      handleDeleteConnection={handleDeleteConnection}
      handleCreateConnection={handleCreateConnection}
      handleUpdateArticleInfo={handleUpdateArticleInfo}
      isOpenCreateNoteModal={isOpenCreateNoteModal}
      setIsOpenCreateNoteModal={setIsOpenCreateNoteModal}
      isOpenUpdateNoteModal={isOpenUpdateNoteModal}
      setIsOpenUpdateNoteModal={setIsOpenUpdateNoteModal}
      isOpenCreateConnectionModal={isOpenCreateConnectionModal}
      setIsOpenCreateConnectionModal={setIsOpenCreateConnectionModal}
      noteSetValue={noteSetValue}
    />
  );
};

export default ArticleDetailContainer;

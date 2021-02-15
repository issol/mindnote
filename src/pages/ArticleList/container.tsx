import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';

import { createArticle, deleteArticle, fetchArticleList } from 'store/articleList/actions';
import { ArticleInfo } from 'store/articleList/types';
import ArticleListPresenter from './presenter';

const ArticleListContainer = () => {
  const [isOpenCreateArticleModal, setIsOpenCreateArticleModal] = useState(false);

  const { register, handleSubmit, errors } = useForm<ArticleInfo>();

  const dispatch = useDispatch();

  const articleReducer = useSelector((state: RootState) => state.articleReducer);
  const userReducer = useSelector((state: RootState) => state.userReducer);

  const handleCreateArticle = (data: ArticleInfo) => {
    setIsOpenCreateArticleModal(false);
    dispatch(createArticle.request(data));
  };

  const handleDeleteArticle = (articleId: number) => () => {
    dispatch(deleteArticle.request(articleId));
  };

  const openModalToCreateArticle = () => {
    setIsOpenCreateArticleModal(true);
  };

  useEffect(() => {
    dispatch(fetchArticleList.request());
  }, [dispatch, fetchArticleList]);

  return (
    <>
      <ArticleListPresenter
        isOpenCreateArticleModal={isOpenCreateArticleModal}
        openModalToCreateArticle={openModalToCreateArticle}
        articleList={articleReducer.articleList}
        handleCreateArticle={handleCreateArticle}
        handleDeleteArticle={handleDeleteArticle}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};

export default ArticleListContainer;

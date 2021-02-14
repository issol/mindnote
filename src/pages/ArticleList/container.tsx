import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';

import { createArticle, deleteArticle, fetchArticleList } from 'store/articleList/actions';
import ArticleListPresenter from './presenter';

const ArticleListContainer = () => {
  const [isOpenCreateArticleModal, setIsOpenCreateArticleModal] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const articleReducer = useSelector((state: RootState) => state.articleReducer);

  const handleCreateArticle = (data: any) => {
    setIsOpenCreateArticleModal(false);
    dispatch(createArticle.request(data));
  };

  const handleDeleteArticle = (articleId: number) => (e: any) => {
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
        isOpenModal={isOpenCreateArticleModal}
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

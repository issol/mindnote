import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';

import { createArticle, deleteArticle, fetchArticleList } from 'store/articleList/actions';
import ArticleListPresenter from './presenter';

const ArticleListContainer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const articleReducer = useSelector((state: RootState) => state.articleReducer);
  const userReducer = useSelector((state: RootState) => state.userReducer);

  const handleCreateArticle = (data: any) => {
    setIsOpenModal(false);
    dispatch(createArticle.request(data));
  };

  const handleDeleteArticle = (e: any) => {
    dispatch(deleteArticle.request(e.target.getAttribute('article-id')));
  };

  const openModalToCreateArticle = () => {
    setIsOpenModal(true);
  };

  useEffect(() => {
    if (userReducer.isLoggedIn) {
      dispatch(fetchArticleList.request());
    }
  }, [dispatch, fetchArticleList, userReducer.isLoggedIn]);

  return (
    <>
      <ArticleListPresenter
        isOpenModal={isOpenModal}
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

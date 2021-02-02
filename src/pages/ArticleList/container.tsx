import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';

import { createArticle, fetchArticleList } from '../../store/articles/actions';
import ArticleListPresenter from './presenter';

const ArticleListContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpenCreateArticleModal, setIsOpenCreateArticleModal] = useState(
    false
  );
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const articleReducer = useSelector(
    (state: RootState) => state.articleReducer
  );

  const handleCreateArticle = (data) => {
    setIsOpenCreateArticleModal(false);
    dispatch(createArticle.request(data));
  };

  const openModalForCreateArticle = () => {
    setIsOpenCreateArticleModal(true);
  };

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchArticleList.request());
  },[articleReducer.articleList]);

  return (
    <>
      {isLoggedIn ? (
        <ArticleListPresenter
          isOpenCreateArticleModal={isOpenCreateArticleModal}
          openModalForCreateArticle={openModalForCreateArticle}
          articleList={articleReducer.articleList}
          handleCreateArticle={handleCreateArticle}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default ArticleListContainer;

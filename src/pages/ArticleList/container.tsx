import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from 'store';

import { createArticle, deleteArticle, fetchArticleList } from 'store/articleList/actions';
import { ArticleInfo } from 'store/articleList/types';
import ArticleListPresenter from './presenter';

const ArticleListContainer = () => {
  const [isOpenCreateArticleModal, setIsOpenCreateArticleModal] = useState(false);

  const { register, handleSubmit, errors } = useForm<ArticleInfo>();

  const dispatch = useDispatch();
  const history = useHistory();

  const articleReducer = useSelector((state: RootState) => state.articleReducer);

  const handleCreateArticle = (data: ArticleInfo) => {
    setIsOpenCreateArticleModal(false);
    dispatch(createArticle.request(data));
  };

  const handleDeleteArticle = (articleId: number) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (window.confirm('삭제하시겠습니까?')) {
      dispatch(deleteArticle.request(articleId));
      window.alert('삭제되었습니다.');
    }
  };

  window.history.pushState(null, '', window.location.href);

  window.onpopstate = () => {
    history.go(1);
    setIsOpenCreateArticleModal(false);
  };

  useEffect(() => {
    dispatch(fetchArticleList.request());
  }, [dispatch]);

  return (
    <>
      <ArticleListPresenter
        isOpenCreateArticleModal={isOpenCreateArticleModal}
        setIsOpenCreateArticleModal={setIsOpenCreateArticleModal}
        articleList={articleReducer.articleList}
        handleCreateArticle={handleCreateArticle}
        handleDeleteArticle={handleDeleteArticle}
        history={history}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};

export default ArticleListContainer;

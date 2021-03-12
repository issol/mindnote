import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from 'store';

import { createArticle, deleteArticle, fetchArticleList } from 'store/articleList/actions';
import ArticleListPresenter from './presenter';

import Swal from 'sweetalert2';
import { ArticleFormType } from 'pages/ArticleDetail/container';

const ArticleListContainer = () => {
  const articleReducer = useSelector((state: RootState) => state.articleReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isOpenCreateArticleModal, setIsOpenCreateArticleModal] = useState(false);
  const [articleFormData, setArticleFormData] = useState<ArticleFormType>({ subject: '', description: '' });
  const handleCreateArticle = () => {
    dispatch(createArticle.request({ subject: articleFormData.subject, description: articleFormData.description, body: '' }));
    setIsOpenCreateArticleModal(false);
  };

  const handleDeleteArticle = (articleId: number) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    Swal.fire({
      title: '글을 삭제하시겠습니까?',
      cancelButtonText: '취소',
      confirmButtonText: '확인',
      cancelButtonColor: '#dcdcdc',
      confirmButtonColor: '#ff105f',
      showCancelButton: true,
      reverseButtons: true,
      icon: 'warning',
      width: '40%',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteArticle.request(articleId));
        Swal.fire('삭제되었습니다', '', 'success');
      }
    });
  };

  const changeSubject = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleFormData((originData) => ({ ...originData, subject: event.target.value }));
  };
  const changeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticleFormData((originData) => ({ ...originData, description: event.target.value }));
  };

  useEffect(() => {
    if (isOpenCreateArticleModal) {
      window.history.pushState(null, '', window.location.href);
    }
  }, [isOpenCreateArticleModal]);

  window.onpopstate = () => {
    setIsOpenCreateArticleModal(false);
  };

  useEffect(() => {
    dispatch(fetchArticleList.request());
  }, [dispatch]);

  return (
    <ArticleListPresenter
      isOpenCreateArticleModal={isOpenCreateArticleModal}
      setIsOpenCreateArticleModal={setIsOpenCreateArticleModal}
      articleList={articleReducer.articleList}
      handleCreateArticle={handleCreateArticle}
      handleDeleteArticle={handleDeleteArticle}
      changeSubject={changeSubject}
      changeDescription={changeDescription}
      history={history}
    />
  );
};

export default ArticleListContainer;

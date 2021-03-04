import { ArticleFormType, ParamType } from 'pages/ArticleDetail/container';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import { updateArticle } from 'store/articleList/actions';
import WriteArticlePresenter from './presenter';

const WriteArticleContainer = () => {
  const articleId = Number(useParams<ParamType>().id);
  const dispatch = useDispatch();
  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);

  const {
    register: articleFormRegister,
    handleSubmit: articleHandleSubmit,
    setValue: articleSetValue,
  } = useForm<ArticleFormType>();

  const handleUpdateArticleInfo = (data: ArticleFormType) => {
    dispatch(updateArticle.request({ id: articleId, ...data }));
  };

  useEffect(() => {
    articleSetValue('subject', articleDetailReducer.articleDetail.subject);
    articleSetValue('description', articleDetailReducer.articleDetail.description);
  }, [articleSetValue, articleDetailReducer.articleDetail]);
  return <WriteArticlePresenter />;
};

export default WriteArticleContainer;

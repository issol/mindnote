import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateArticle } from 'store/articles/actions';
import WriteArticlePresenter from './presenter';

type ArticleProps = {
  id: number;
  subject: string;
  description: string;
  createdAt: string;
};

type UpdateProps = {
  id: number;
  subject: string;
  description: string;
};

const WriteArticleContainer = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [articleInfo, setArticleInfo] = useState<ArticleProps>({
    id: 0,
    subject: '',
    description: '',
    createdAt: '',
  });

  const [updatedArticleInfo, setUpdatedArticleInfo] = useState<UpdateProps>({
    id: 0,
    subject: '',
    description: '',
  });

  const { register, handleSubmit } = useForm<UpdateProps>();

  const handleUpdateArticleInfo = (data :any) => {
    setUpdatedArticleInfo({
      id: articleInfo.id,
      subject: data.subject,
      description: data.description,
    });
  };

  useEffect(() => {
    setArticleInfo(props.location.state);
  }, []);

  useEffect(() => {
    dispatch(updateArticle.request(updatedArticleInfo));
    return (()=>{
      history.push("/article-list")
    })
  }, [updatedArticleInfo]);

  return (
    <WriteArticlePresenter
      articleInfo={articleInfo}
      register={register}
      handleSubmit={handleSubmit}
      handleUpdateArticleInfo={handleUpdateArticleInfo}
    />
  );
};

export default WriteArticleContainer;

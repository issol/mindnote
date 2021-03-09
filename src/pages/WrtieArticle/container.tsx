import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import MarkdownIt from 'markdown-it';

import { ParamType } from 'pages/ArticleDetail/container';
import { RootState } from 'store';
import { fetchArticleDetail } from 'store/article/actions';
import WriteArticlePresenter from './presenter';
import { updateArticle } from 'store/articleList/actions';

export type ArticleInfoType = {
  subject: string;
  description: string;
  body: string;
};

export type NoteFormType = {
  id: number;
  contents: string;
};

export type ArticleDetailFormType = {
  subject: string;
  description: string;
  body: string;
  notes: { id: number; contents: string }[];
  connections: { id: number; leftNote: number; rightNote: number; reason: string; createdAt: string }[];
};

const WriteArticleContainer = () => {
  const articleId = Number(useParams<ParamType>().id);
  const dispatch = useDispatch();
  const history = useHistory();

  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);

  const mdParser = new MarkdownIt();

  const [articleInfo, setArticleInfo] = useState<ArticleInfoType>({
    subject: '',
    description: '',
    body: '',
  });

  const articleDetail: ArticleDetailFormType = {
    subject: articleDetailReducer.articleDetail.subject,
    description: articleDetailReducer.articleDetail.description,
    body: articleDetailReducer.articleDetail.body,
    notes: articleDetailReducer.articleDetail.notes.map((note) => ({ id: note.id, contents: note.contents })),
    connections: articleDetailReducer.articleDetail.connections.map((connection) => ({
      id: connection.id,
      leftNote: connection.leftNote,
      rightNote: connection.rightNote,
      reason: connection.reason,
      createdAt: connection.createdAt,
    })),
  };

  const handleEditorChange = ({ text }) => {
    setArticleInfo((originData) => ({ ...originData, body: text }));
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleInfo((originData) => ({ ...originData, subject: event.target.value }));
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticleInfo((originData) => ({ ...originData, description: event.target.value }));
  };

  const handleUpdateArticleForm = () => {
    dispatch(updateArticle.request({ id: articleId, ...articleInfo }));
  };

  useEffect(() => {
    dispatch(fetchArticleDetail.request(articleId));
  }, [dispatch, articleId]);

  useEffect(() => {
    setArticleInfo({
      subject: articleDetailReducer.articleDetail.subject,
      description: articleDetailReducer.articleDetail.description,
      body: articleDetailReducer.articleDetail.body,
    });
  }, [articleDetailReducer.articleDetail]);

  return (
    <WriteArticlePresenter
      mdParser={mdParser}
      history={history}
      articleDetail={articleDetail}
      articleInfo={articleInfo}
      handleEditorChange={handleEditorChange}
      handleSubjectChange={handleSubjectChange}
      handleDescriptionChange={handleDescriptionChange}
      handleUpdateArticleForm={handleUpdateArticleForm}
    />
  );
};

export default WriteArticleContainer;

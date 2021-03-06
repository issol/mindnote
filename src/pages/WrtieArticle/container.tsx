import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MarkdownIt from 'markdown-it';

import { ArticleFormType, ParamType } from 'pages/ArticleDetail/container';
import { RootState } from 'store';
import { fetchArticleDetail } from 'store/article/actions';
import { updateArticle } from 'store/articleList/actions';
import WriteArticlePresenter from './presenter';

const WriteArticleContainer = () => {
  const articleId = Number(useParams<ParamType>().id);
  const dispatch = useDispatch();

  const articleDetailReducer = useSelector((state: RootState) => state.articleDetailReducer);

  const mdParser = new MarkdownIt();

  const articleDetail = {
    subject: articleDetailReducer.articleDetail.subject,
    description: articleDetailReducer.articleDetail.description,
    notes: articleDetailReducer.articleDetail.notes.map((note) => ({ id: note.id, contents: note.contents })),
    connections: articleDetailReducer.articleDetail.connections.map((connection) => ({
      id: connection.id,
      leftNote: connection.leftNote,
      rightNote: connection.rightNote,
      reason: connection.reason,
    })),
  };

  const handleEditorChange = ({ html, text }) => {
    console.log(text);
  };

  const handleSubjectChange = (data: any) => {
    console.log(data);
  };

  const handleDescriptionChange = (data: any) => {
    console.log(data);
  };

  /* const handleUpdateArticleInfo = (data: ArticleFormType) => {
    dispatch(updateArticle.request({ id: articleId, ...data }));
  };*/
  useEffect(() => {
    dispatch(fetchArticleDetail.request(articleId));
  }, [dispatch, articleId]);

  return (
    <WriteArticlePresenter
      mdParser={mdParser}
      articleDetail={articleDetail}
      handleEditorChange={handleEditorChange}
      handleSubjectChange={handleSubjectChange}
      handleDescriptionChange={handleDescriptionChange}
    />
  );
};

export default WriteArticleContainer;

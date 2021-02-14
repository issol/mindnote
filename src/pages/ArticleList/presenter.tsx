import React from 'react';

import { DeepMap, FieldError } from 'react-hook-form';
import styled from 'styled-components';

import Article from 'modules/Article/ArticleCard';
import CreateArticleModal from 'modules/Article/CreateArticleModal';
import Navigation from 'components/Navigation';
import { ArticleInfo, ArticleResponse } from 'store/articleList/types';
import Modal from 'components/Modal';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type inputProps = {
  subject: string;
  description: string;
};

type Props = {
  isOpenCreateArticleModal: boolean;
  openModalToCreateArticle: (event: React.MouseEvent<HTMLElement>) => void;
  handleCreateArticle: (data: ArticleInfo) => void;
  handleDeleteArticle: (articleId: number) => (event: React.MouseEvent<HTMLElement>) => void;
  articleList: ArticleResponse[];
  handleSubmit: Function;
  register: ({ required }: { required?: boolean }) => RefReturn;
  errors: DeepMap<inputProps, FieldError>;
};

const ArticleListPresenter = ({
  isOpenCreateArticleModal,
  openModalToCreateArticle,
  handleCreateArticle,
  handleDeleteArticle,
  articleList,
  register,
  handleSubmit,
  errors,
}: Props) => {
  return (
    <>
      <Navigation />
      <CreateArticleModal
        isOpenCreateArticleModal={isOpenCreateArticleModal}
        register={register}
        handleSubmit={handleSubmit}
        handleCreateArticle={handleCreateArticle}
        errors={errors}
      />
      )
      <CardWrapper>
        {articleList.map((article) => {
          return (
            <Article
              key={article.id}
              id={article.id}
              subject={article.subject}
              description={article.description}
              handleDeleteArticle={handleDeleteArticle}
            />
          );
        })}
        <CreateArticleButton onClick={openModalToCreateArticle}>+</CreateArticleButton>
      </CardWrapper>
    </>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  padding: 50px;
  padding-top: 70px;

  width: 100%;
  height: 100%;
`;

const CreateArticleButton = styled.button`
  background-color: white;
  color: #adaeb9;

  width: 300px;

  margin-bottom: 70px;
  padding: 20px;

  font-size: 50px;

  outline: none;
  border: white;
  border-radius: 10px;

  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

export default ArticleListPresenter;

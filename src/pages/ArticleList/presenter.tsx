import React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import styled from 'styled-components';

import ArticleCard from 'modules/Article/ArticleCard';
import CreateArticleModal from 'modules/Article/CreateArticleModal';
import Navigation from 'components/Navigation';
import { ArticleResponse } from 'store/articleList/types';

type Props = {
  isOpenCreateArticleModal: boolean;
  setIsOpenCreateArticleModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleCreateArticle: () => void;
  handleDeleteArticle: (articleId: number) => (event: React.MouseEvent<HTMLElement>) => void;
  articleList: ArticleResponse[];
  changeSubject: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  changeDescription: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  history: RouteComponentProps['history'];
};

const ArticleListPresenter = ({
  isOpenCreateArticleModal,
  setIsOpenCreateArticleModal,
  handleCreateArticle,
  handleDeleteArticle,
  articleList,
  changeSubject,
  changeDescription,
  history,
}: Props) => {
  return (
    <Container>
      <Overlay>
        <Navigation />
        <CreateArticleModal
          isOpenCreateArticleModal={isOpenCreateArticleModal}
          setIsOpenCreateArticleModal={setIsOpenCreateArticleModal}
          handleCreateArticle={handleCreateArticle}
          changeSubject={changeSubject}
          changeDescription={changeDescription}
        />
      </Overlay>
      <CardWrapper>
        {articleList.map((article) => {
          return (
            <ArticleCard
              key={article.id}
              id={article.id}
              subject={article.subject}
              description={article.description}
              handleDeleteArticle={handleDeleteArticle}
              history={history}
            />
          );
        })}
        <CreateArticleButton onClick={() => setIsOpenCreateArticleModal(true)}>+</CreateArticleButton>
      </CardWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Overlay = styled.div`
  position: absoulte;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  padding: 30px;
  padding-top: 70px;

  width: 100%;
  height: 100%;
`;

const CreateArticleButton = styled.button`
  background-color: white;
  color: #adaeb9;

  width: 280px;

  margin-bottom: 70px;
  padding: 20px;

  cursor: pointer;
  outline: none;
  border: white;
  border-radius: 10px;

  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  font-size: ${({ theme }) => theme.fontSize.title};
`;

export default ArticleListPresenter;

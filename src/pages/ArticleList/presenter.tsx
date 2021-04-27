import React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import styled from 'styled-components';

import ArticleCard from 'modules/Article/ArticleCard';
import CreateArticleModal from 'modules/Article/CreateArticleModal';
import Navigation from 'components/Navigation';
import { ArticleResponse } from 'store/articleList/types';
import { ContainerProps } from 'pages/MyArticle/presenter';

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
      <Navigation />
      <Overlay>
        <CreateArticleModal
          isOpenCreateArticleModal={isOpenCreateArticleModal}
          setIsOpenCreateArticleModal={setIsOpenCreateArticleModal}
          handleCreateArticle={handleCreateArticle}
          changeSubject={changeSubject}
          changeDescription={changeDescription}
        />
      </Overlay>
      <CardWrapper listLength={articleList.length}>
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
`;

const Overlay = styled.div`
  position: absoulte;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const CardWrapper = styled.div<ContainerProps>`
  margin: 50px auto;
  display: grid;
  gap: 50px;
  width: 70%;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    grid-template-columns: repeat(1, minmax(280px, auto));
    grid-template-rows: repeat(${(props) => props.listLength + 1}, minmax(150px, auto));
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(1, minmax(280px, auto));
    grid-template-rows: repeat(${(props) => props.listLength + 1}, minmax(150px, auto));
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(270px, auto));
    grid-template-rows: repeat(${(props) => Math.ceil(props.listLength / 2) + 1}, minmax(150px, auto));
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(3, minmax(200px, auto));
    grid-template-rows: repeat(${(props) => Math.ceil(props.listLength / 3) + 1}, minmax(150px, auto));
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(300px, auto));
    grid-template-rows: repeat(${(props) => Math.ceil(props.listLength / 3) + 1}, minmax(150px, auto));
  }
  @media only screen and (min-width: 1430px) {
    grid-template-columns: repeat(auto-fit, minmax(20%, auto));
    grid-template-rows: repeat(${(props) => Math.ceil(props.listLength / 3) + 1}, minmax(150px, auto));
  }
`;

const CreateArticleButton = styled.button`
  background-color: white;
  color: #adaeb9;

  padding: 20px;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
    width: 250px;
  }

  @media only screen and (min-width: 992px) {
    width: 220px;
  }

  @media only screen and (min-width: 1200px) {
    width: 240px;
  }
  @media only screen and (min-width: 1430px) {
    width: 220px;
  }

  cursor: pointer;
  outline: none;
  border: white;
  border-radius: 10px;

  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  font-size: ${({ theme }) => theme.fontSize.title};
`;

export default ArticleListPresenter;

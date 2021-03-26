import Navigation from 'components/Navigation';

import PublishedArticleCard from 'modules/Article/PublishedArticleCard';
import React from 'react';
import { ArticleResponse } from 'store/articleList/types';
import styled from 'styled-components';

type Props = {
  articleList: ArticleResponse[];
  handleMovePublishedArticlePage: (id: number) => void;
};

type ContainerProps = {
  listLength: number;
};

const MyArticlePresenter = ({ articleList, handleMovePublishedArticlePage }: Props) => {
  return (
    <Container>
      <Navigation />

      <ArticleCardContainer listLength={articleList.length}>
        {articleList.map((article) => {
          return (
            <PublishedArticleCard
              key={article.id}
              id={article.id}
              subject={article.subject}
              body={article.body}
              createdAt={article.createdAt}
              handleMovePublishedArticlePage={handleMovePublishedArticlePage}
            />
          );
        })}
      </ArticleCardContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  &,
  & * {
    box-sizing: border-box;
  }
`;

const ArticleCardContainer = styled.div<ContainerProps>`
  margin: 50px auto;
  display: grid;
  gap: 50px;
  width: 70%;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(20%, auto));
    grid-template-rows: repeat(${(props) => props.listLength}, minmax(350px, auto));
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    justify-content: center;
    grid-template-columns: 300px;
    grid-template-rows: repeat(${(props) => props.listLength}, minmax(350px, auto));
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(300px, auto));
    grid-template-rows: repeat(${(props) => Math.ceil(props.listLength / 2)}, minmax(350px, auto));
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(3, minmax(270px, auto));
    grid-template-rows: repeat(${(props) => Math.ceil(props.listLength / 3)}, minmax(350px, auto));
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(300px, auto));
    grid-template-rows: repeat(${(props) => Math.ceil(props.listLength / 3)}, minmax(350px, auto));
  }
`;

export default MyArticlePresenter;

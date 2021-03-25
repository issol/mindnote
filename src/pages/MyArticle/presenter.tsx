import Navigation from 'components/Navigation';
import MarkdownIt from 'markdown-it';
import PublishedArticleCard from 'modules/Article/PublishedArticleCard';
import React from 'react';
import { ArticleResponse } from 'store/articleList/types';
import styled from 'styled-components';

type Props = {
  articleList: ArticleResponse[];
};

const MyArticlePresenter = ({ articleList }: Props) => {
  return (
    <Container>
      <Navigation />
      <Overlay onClick={() => console.log('click')}></Overlay>
      <ArticleCardContainer>
        {articleList.map((article) => {
          return (
            <PublishedArticleCard key={article.id} subject={article.subject} body={article.body} createdAt={article.createdAt} />
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

const Overlay = styled.div`
  width: 100%;
  height: 100%;
`;

const ArticleCardContainer = styled.div`
  margin: 50px auto;
  display: grid;
  width: 70%;
  grid-template-columns: repeat(3, minmax(300px, auto));
  grid-template-rows: repeat(4, minmax(350px, auto));

  gap: 50px;
`;

export default MyArticlePresenter;

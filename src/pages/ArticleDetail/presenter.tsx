import React from 'react';

import NoteGraph from 'modules/NoteGraph';
import styled from 'styled-components';
import Navigation from 'components/Navigation';

import arrowImage from 'assets/images/arrow.svg';

type Props = {
  handleRedirectWriteArtilcePage: (event: React.MouseEvent<HTMLElement>) => void;
  articleId: number;
};

const ArticleDetailPresenter = ({ handleRedirectWriteArtilcePage, articleId }: Props) => {
  return (
    <Container>
      <Navigation />
      <Overlay>
        <NoteGraph articleId={articleId} />
        <ButtonForm>
          <GoWriteArticleButton onClick={handleRedirectWriteArtilcePage} />
          <InfoText>작성하기</InfoText>
        </ButtonForm>
      </Overlay>
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
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 30px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const ButtonForm = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GoWriteArticleButton = styled.button`
  background-image: url(${arrowImage});
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;

const InfoText = styled.p`
  margin-top: 10px;
  font-size: 15px;
`;

export default ArticleDetailPresenter;

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
        <NoteGraphWrapper>
          <NoteGraph articleId={articleId} />
        </NoteGraphWrapper>

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
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 30px;
  background-color: rgba(255, 255, 255, 0.8);
`;
const NoteGraphWrapper = styled.div`
  box-sizing: border-box;
  flex: 9 9 800px;
  margin-left: 20px;
`;

const ButtonForm = styled.div`
  ${({ theme }) => theme.common.flexColumn}
  ${({ theme }) => theme.common.flexCenter}

  flex: 1 1 100px;
`;

const GoWriteArticleButton = styled.button`
  ${({ theme }) => theme.common.noneLine}

  background-image: url(${arrowImage});
  background-color: white;

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

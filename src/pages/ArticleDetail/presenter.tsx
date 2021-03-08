import React from 'react';

import NoteGraph from 'modules/NoteGraph';
import styled from 'styled-components';
import Navigation from 'components/Navigation';
import CreateNoteModal from 'modules/Note/CreateNoteModal';
import UpdateNoteModal from 'modules/Note/UpdateNoteModal';
import CreateConnectionModal from 'modules/Connection/CreateConnectionModal';
import UpdateConnectionModal from 'modules/Connection/UpdateConnectionModal';

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
      </Overlay>
      <div>
        <button onClick={handleRedirectWriteArtilcePage}>글 작성하기</button>
      </div>
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
  margin-top: 30px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export default ArticleDetailPresenter;

import React from 'react';

import NoteGraph from 'modules/NoteGraph';

type Props = {
  handleRedirectWriteArtilcePage: (event: React.MouseEvent<HTMLElement>) => void;
  articleId: number;
};

const ArticleDetailPresenter = ({ handleRedirectWriteArtilcePage, articleId }: Props) => {
  return (
    <>
      <NoteGraph articleId={articleId} />
      <button onClick={handleRedirectWriteArtilcePage}>글 작성하기</button>
    </>
  );
};

export default ArticleDetailPresenter;

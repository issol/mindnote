import React from 'react';

import TextInput from 'components/TextInput';

import styled from 'styled-components';

import { ArticleFormType } from './container';
import NoteGraph from 'modules/NoteGraph';
import { Redirect } from 'react-router-dom';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

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

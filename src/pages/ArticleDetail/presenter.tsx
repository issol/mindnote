import React from 'react';

import TextInput from 'components/TextInput';

import styled from 'styled-components';

import { ArticleFormType } from './container';
import NoteGraph from 'modules/NoteGraph';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  articleFormRegister: ({ required }: { required?: boolean }) => RefReturn;
  articleHandleSubmit: Function;
  handleUpdateArticleInfo: (data: ArticleFormType) => void;
  articleId: number;
};

const ArticleDetailPresenter = ({ articleFormRegister, articleHandleSubmit, handleUpdateArticleInfo, articleId }: Props) => {
  return (
    <>
      <ArticleInfoForm onSubmit={articleHandleSubmit(handleUpdateArticleInfo)}>
        <div>
          <TextInput
            type="text"
            label="subject"
            register={articleFormRegister}
            required
            errorHandler={{ isError: false, errorMessage: '' }}
          />
          <TextInput
            type="text"
            label="description"
            register={articleFormRegister}
            required
            errorHandler={{ isError: false, errorMessage: '' }}
          />
        </div>

        <SaveButton type="submit" value="저장하기" />
      </ArticleInfoForm>
      <NoteGraph articleId={articleId} />
    </>
  );
};

const ArticleInfoForm = styled.form`
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 70%;
  height: 240px;
`;

const SaveButton = styled.input`
  width: 50%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;
  display: block;

  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
`;
export default ArticleDetailPresenter;

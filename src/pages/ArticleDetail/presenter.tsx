import React from 'react';

import TextInput from 'components/TextInput';

import styled from 'styled-components';

import { ArticleFormType } from './container';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  articleFormRegister: ({ required }: { required?: boolean }) => RefReturn;
  articleHandleSubmit: Function;
  handleUpdateArticleInfo: (data: ArticleFormType) => void;
};

const ArticleDetailPresenter = ({ articleFormRegister, articleHandleSubmit, handleUpdateArticleInfo }: Props) => {
  return (
    <>
      <ArticleInfoForm onSubmit={articleHandleSubmit(handleUpdateArticleInfo)}>
        <div>
          <TextInput type="text" label="subject" register={articleFormRegister} required />
          <TextInput type="text" label="description" register={articleFormRegister} required />
        </div>
        <SaveButton type="submit" value="저장하기" />
      </ArticleInfoForm>
    </>
  );
};

const ArticleInfoForm = styled.form`
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 700px;
  height: 100%;
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

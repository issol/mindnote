import TextInput from 'components/TextInput';
import { ArticleFormType } from 'pages/ArticleDetail/container';
import React from 'react';
import styled from 'styled-components';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  articleFormRegister: ({ required }: { required?: boolean }) => RefReturn;
  articleHandleSubmit: Function;
  handleUpdateArticleInfo: (data: ArticleFormType) => void;
};

const WriteArticlePresenter = ({ articleFormRegister, articleHandleSubmit, handleUpdateArticleInfo }: Props) => {
  return (
    <WriteArticlePage>
      <ArticleInfoForm onSubmit={articleHandleSubmit(handleUpdateArticleInfo)}>
        <div>
          <input type="text" name="subject" ref={articleFormRegister({ required: true })} />
          <input type="text" name="description" ref={articleFormRegister({ required: false })} />
        </div>
      </ArticleInfoForm>

      <div>오예</div>
    </WriteArticlePage>
  );
};

const WriteArticlePage = styled.div`
  display: flex;
`;

const ArticleInfoForm = styled.form`
  box-sizing: border-box;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 60%;
  height: 240px;
`;

const SubjectInput = styled.input`
  border: none;
`;

export default WriteArticlePresenter;

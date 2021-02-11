import React from 'react';

import { DeepMap, FieldError } from 'react-hook-form';

import Note from 'modules/Note';
import TextInput from 'components/TextInput';
import { NoteResponse } from 'store/article/types';

import styled from 'styled-components';
import { ArticleInfo } from 'store/articles/types';

type InputProps = {
  subject: string;
  description: string;
};

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  articleNoteList: NoteResponse[];
  register: ({ required }: { required?: boolean }) => RefReturn;
  handleSubmit: Function;
  handleUpdateArticleInfo: (event: React.MouseEvent<HTMLElement>) => void;
  handleCreateNote: (event: React.MouseEvent<HTMLElement>) => void;
  errors: DeepMap<InputProps, FieldError>;
};

const WriteArticlePresenter = ({
  articleNoteList,
  register,
  handleSubmit,
  handleUpdateArticleInfo,
  handleCreateNote,
  errors,
}: Props) => {
  return (
    <>
      <ArticleInfoForm onSubmit={handleSubmit(handleUpdateArticleInfo)}>
        <div>
          <TextInput type="text" label="subject" register={register} required />
          <TextInput type="text" label="description" register={register} required />
        </div>
        <CardWrapper>
          {articleNoteList.map((note) => {
            return <Note key={note.id} id={note.id} contents={note.contents} createdAt={note.createdAt} />;
          })}
        </CardWrapper>

        <SaveButton type="submit" value="저장하기" />
      </ArticleInfoForm>
      <button onClick={handleCreateNote}>+</button>
    </>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 30px;
  width: 100%;
`;

const ArticleInfoForm = styled.form`
  box-sizing: border-box;
  margin: 0 auto;
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
export default WriteArticlePresenter;

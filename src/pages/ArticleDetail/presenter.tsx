import React from 'react';

import { DeepMap, FieldError } from 'react-hook-form';

import Note from 'modules/Note/NoteCard';
import TextInput from 'components/TextInput';
import Modal from 'components/Modal';
import { NoteResponse } from 'store/article/types';

import styled from 'styled-components';

import CreateNoteModal from 'modules/Note/CreateNoteModal';
import { ArticleFormType, NoteFormType } from './container';

type InputProps = {
  subject: string;
  description: string;
};

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  articleNoteList: NoteResponse[];
  articleFormRegister: ({ required }: { required?: boolean }) => RefReturn;
  noteFormRegister: ({ required }: { required?: boolean }) => RefReturn;
  articleHandleSubmit: Function;
  noteHandleSubmit: Function;
  handleCreateNote: (data: NoteFormType) => void;
  handleDeleteNote: (event: React.MouseEvent<HTMLElement>) => void;
  handleUpdateArticleInfo: (data: ArticleFormType) => void;
  articleErrors: DeepMap<InputProps, FieldError>;
  noteErrors: DeepMap<NoteFormType, FieldError>;
  isOpenModal: boolean;
  setIsOpenModal: any;
};

const ArticleDetailPresenter = ({
  articleNoteList,
  articleFormRegister,
  noteFormRegister,
  articleHandleSubmit,
  noteHandleSubmit,
  handleCreateNote,
  handleDeleteNote,
  handleUpdateArticleInfo,
  articleErrors,
  noteErrors,
  isOpenModal,
  setIsOpenModal,
}: Props) => {
  return (
    <>
      <Modal isOpen={isOpenModal}>
        <CreateNoteModal register={noteFormRegister} handleSubmit={noteHandleSubmit} handleCreateNote={handleCreateNote} />
      </Modal>
      <ArticleInfoForm onSubmit={articleHandleSubmit(handleUpdateArticleInfo)}>
        <div>
          <TextInput type="text" label="subject" register={articleFormRegister} required />
          <TextInput type="text" label="description" register={articleFormRegister} required />
        </div>
        <CardWrapper>
          {articleNoteList.map((note) => {
            return (
              <Note
                key={note.id}
                id={note.id}
                contents={note.contents}
                createdAt={note.createdAt}
                handleDeleteNote={handleDeleteNote}
              />
            );
          })}
        </CardWrapper>

        <SaveButton type="submit" value="저장하기" />
      </ArticleInfoForm>
      <button onClick={() => setIsOpenModal(true)}>+</button>
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
export default ArticleDetailPresenter;

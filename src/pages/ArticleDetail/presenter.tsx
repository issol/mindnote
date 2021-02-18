import React from 'react';

import TextInput from 'components/TextInput';

import { ConnectionResponse, NoteResponse, UpdatedNoteInfo } from 'store/article/types';

import styled from 'styled-components';

import CreateNoteModal from 'modules/Note/CreateNoteModal';
import { ArticleFormType, ConnectionFormType, NoteFormType } from './container';

import NoteCard from 'modules/Note/NoteCard';
import ConnectionCard from 'modules/Connection/ConnectionCard';
import CreateConnectionModal from 'modules/Connection/CreateConnectionModal';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  noteList: NoteResponse[];
  connectionList: ConnectionResponse[];
  articleFormRegister: ({ required }: { required?: boolean }) => RefReturn;
  noteFormRegister: ({ required }: { required?: boolean }) => RefReturn;
  connectionFormRegister: ({ required }: { required?: boolean }) => RefReturn;
  articleHandleSubmit: Function;
  noteHandleSubmit: Function;
  connectionHandleSubmit: Function;
  handleCreateNote: (data: NoteFormType) => void;
  handleUpdateNote: (data: UpdatedNoteInfo) => void;
  handleDeleteNote: (noteId: number) => () => void;
  handleCreateConnection: (data: ConnectionFormType) => void;
  handleDeleteConnection: (connectionId: number) => () => void;
  handleUpdateArticleInfo: (data: ArticleFormType) => void;
  isOpenCreateNoteModal: boolean;
  setIsOpenCreateNoteModal: (isOpen: boolean) => void;
  isOpenCreateConnectionModal: boolean;
  setIsOpenCreateConnectionModal: (isOpen: boolean) => void;
  noteSetValue: any;
};

const ArticleDetailPresenter = ({
  noteList,
  connectionList,
  articleFormRegister,
  noteFormRegister,
  connectionFormRegister,
  articleHandleSubmit,
  noteHandleSubmit,
  connectionHandleSubmit,
  handleCreateNote,
  handleUpdateNote,
  handleDeleteNote,
  handleCreateConnection,
  handleDeleteConnection,
  handleUpdateArticleInfo,
  isOpenCreateNoteModal,
  setIsOpenCreateNoteModal,
  isOpenCreateConnectionModal,
  setIsOpenCreateConnectionModal,
  noteSetValue,
}: Props) => {
  return (
    <>
      <CreateNoteModal
        isOpenCreateNoteModal={isOpenCreateNoteModal}
        register={noteFormRegister}
        handleSubmit={noteHandleSubmit}
        handleCreateNote={handleCreateNote}
      />

      <CreateConnectionModal
        isOpenCreateConnectionModal={isOpenCreateConnectionModal}
        register={connectionFormRegister}
        handleSubmit={connectionHandleSubmit}
        handleCreateConnection={handleCreateConnection}
      />

      <ArticleInfoForm onSubmit={articleHandleSubmit(handleUpdateArticleInfo)}>
        <div>
          <TextInput type="text" label="subject" register={articleFormRegister} required />
          <TextInput type="text" label="description" register={articleFormRegister} required />
        </div>
        <SaveButton type="submit" value="저장하기" />
      </ArticleInfoForm>
      <CardWrapper>
        {noteList.map((note) => {
          return (
            <NoteCard
              key={note.id}
              id={note.id}
              contents={note.contents}
              handleDeleteNote={handleDeleteNote}
              register={noteFormRegister}
              handleSubmit={noteHandleSubmit}
              handleUpdateNote={handleUpdateNote}
              noteSetValue={noteSetValue}
            />
          );
        })}
      </CardWrapper>
      <button onClick={() => setIsOpenCreateNoteModal(true)}>노트추가</button>
      <CardWrapper>
        {connectionList.map((connection) => {
          return (
            <ConnectionCard
              key={connection.id}
              id={connection.id}
              reason={connection.reason}
              leftNote={connection.leftNote}
              rightNote={connection.rightNote}
              handleDeleteConnection={handleDeleteConnection}
            />
          );
        })}
      </CardWrapper>
      <button onClick={() => setIsOpenCreateConnectionModal(true)}>커넥션추가</button>
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

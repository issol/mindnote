import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateNote } from 'store/article/actions';
import { UpdatedNoteInfo } from 'store/article/types';

import styled from 'styled-components';
import UpdateNoteModal from '../UpdateNoteModal';
import UpdateNote from '../UpdateNoteModal';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type NoteFormType = {
  contents: string;
};

export type ContentsForUpdate = {
  id: number;
  contents: string;
};

type Props = {
  id: number;
  contents: string;
  articleId: number;
  handleDeleteNote: (noteId: number) => () => void;
  handleSubmit: Function;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

const NoteCard = ({ articleId, id, contents, handleDeleteNote, handleSubmit, register }: Props) => {
  const dispatch = useDispatch();

  const [isUpdate, setIsUpdate] = useState(false);
  const [noteInfo, setNoteInfo] = useState<ContentsForUpdate>({ id: 0, contents: 'test' });
  const [isOpenUpdateNoteModal, setIsOpenUpdateNoteModal] = useState(false);

  const { register: noteFormRegister, handleSubmit: noteHandleSubmit, setValue: noteSetValue } = useForm<NoteFormType>();

  const noteUpdate = (data) => {
    setNoteInfo(data);
    setIsOpenUpdateNoteModal(true);
  };

  const handleUpdateNote = (data: UpdatedNoteInfo) => {
    dispatch(updateNote.request({ article: articleId, id: Number(data.id), contents: data.contents }));
  };

  return (
    <>
      <Card>
        <div>{id}</div>
        <>
          <NoteTitle>{contents}</NoteTitle>
          <button onClick={() => setIsUpdate(true)}>수정</button>
          <button onClick={handleDeleteNote(id)}>삭제</button>
        </>
      </Card>
      <UpdateNoteModal
        isOpenUpdateNoteModal={isOpenUpdateNoteModal}
        register={noteFormRegister}
        handleSubmit={noteHandleSubmit}
        handleUpdateNote={handleUpdateNote}
        noteInfo={noteInfo}
        noteSetValue={noteSetValue}
      />
    </>
  );
};

const Card = styled.div`
  background-color: white;

  width: 30%;
  padding: 20px;
  margin: 10px auto;
  border-radius: 10px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const NoteTitle = styled.h3`
  margin: 0;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 15px;
  color: #2c2c2c;
`;

export default NoteCard;

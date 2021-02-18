import TextInput from 'components/TextInput';
import { NoteFormType } from 'pages/ArticleDetail/container';
import React, { useEffect, useState } from 'react';
import { UpdatedNoteInfo } from 'store/article/types';

import styled from 'styled-components';
import UpdateNote from '../UpdateNote';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  id: number;
  contents: string;
  handleDeleteNote: (noteId: number) => () => void;
  handleUpdateNote: (data: UpdatedNoteInfo) => void;
  handleSubmit: Function;
  register: ({ required }: { required?: boolean }) => RefReturn;
  noteSetValue: any;
};

const NoteCard = ({ id, contents, handleDeleteNote, handleUpdateNote, handleSubmit, register, noteSetValue }: Props) => {
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <>
      <Card>
        <div>{id}</div>

        {isUpdate ? (
          <UpdateNote
            id={id}
            setIsUpdate={setIsUpdate}
            register={register}
            contents={contents}
            noteSetValue={noteSetValue}
            handleUpdateNote={handleUpdateNote}
            handleSubmit={handleSubmit}
          />
        ) : (
          <>
            <NoteTitle>{contents}</NoteTitle>
            <button onClick={() => setIsUpdate(true)}>수정</button>
            <button onClick={handleDeleteNote(id)}>삭제</button>
          </>
        )}
      </Card>
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

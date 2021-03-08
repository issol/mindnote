import Modal from 'components/Modal';
import TextInput from 'components/TextInput';
import React from 'react';

import { NoteInfo } from 'store/article/types';
import styled from 'styled-components';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  register: ({ required }: { required?: boolean }) => RefReturn;
  handleSubmit: Function;
  handleCreateNote: (data: NoteInfo) => void;
  isOpenCreateNoteModal: boolean;
  setIsOpenCreateNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateNoteModal = ({
  isOpenCreateNoteModal,
  setIsOpenCreateNoteModal,
  register,
  handleCreateNote,
  handleSubmit,
}: Props) => {
  return (
    <Modal isOpen={isOpenCreateNoteModal} setIsOpen={setIsOpenCreateNoteModal}>
      <form onSubmit={handleSubmit(handleCreateNote)}>
        <TextInput
          type="text"
          label="contents"
          register={register}
          required
          errorHandler={{ isError: false, errorMessage: '' }}
        />
        <CreateNoteButton type="submit" value="저장" />
      </form>
    </Modal>
  );
};

const CreateNoteButton = styled.input`
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

export default CreateNoteModal;

import Modal from 'components/Modal';
import TextInput from 'components/TextInput';
import React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';
import { NoteInfo } from 'store/article/types';

type InputProps = {
  contents: string;
};

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  register: ({ required }: { required?: boolean }) => RefReturn;
  handleSubmit: Function;
  handleCreateNote: (data: NoteInfo) => void;
  isOpenCreateNoteModal: boolean;
};

const CreateNoteModal = ({ isOpenCreateNoteModal, register, handleCreateNote, handleSubmit }: Props) => {
  return (
    <Modal isOpen={isOpenCreateNoteModal}>
      <form onSubmit={handleSubmit(handleCreateNote)}>
        <TextInput type="text" label="contents" register={register} required />
        <input type="submit" value="저장" />
      </form>
    </Modal>
  );
};

export default CreateNoteModal;

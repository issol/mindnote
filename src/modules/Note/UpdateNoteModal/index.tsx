import React from 'react';

import Modal from 'components/Modal';
import TextInput from 'components/TextInput';
import { UpdatedNoteInfo } from 'store/article/types';
import { ContentsForUpdate } from '../NoteCard';

type RefReturn = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;

type Props = {
  register: ({ required }: { required?: boolean }) => RefReturn;
  handleUpdateNote: (data: UpdatedNoteInfo) => void;
  handleSubmit: Function;
  isOpenUpdateNoteModal: boolean;
  noteInfo: ContentsForUpdate;
  noteSetValue: any;
};

const UpdateNoteModal = ({ register, handleSubmit, handleUpdateNote, isOpenUpdateNoteModal, noteInfo, noteSetValue }: Props) => {
  return (
    <Modal isOpen={isOpenUpdateNoteModal}>
      <form onSubmit={handleSubmit(handleUpdateNote)}>
        <TextInput type="text" label="contents" register={register} required />
        <input type="hidden" value={noteInfo.id} name="id" ref={register({})} />
        <input type="submit" value="저장" />
      </form>
    </Modal>
  );
};

export default UpdateNoteModal;

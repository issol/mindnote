import React from 'react';

import Modal from 'components/Modal';

import { NoteFormType } from 'modules/NoteGraph/container';

type Props = {
  handleUpdateNote: (event: React.MouseEvent<HTMLElement>) => void;
  isOpenUpdateNoteModal: boolean;
  data: NoteFormType;
  changeNoteFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const UpdateNoteModal = ({ handleUpdateNote, isOpenUpdateNoteModal, data, changeNoteFormData }: Props) => {
  return (
    <Modal isOpen={isOpenUpdateNoteModal}>
      <input type="text" value={data.contents} onChange={changeNoteFormData} />
      <button onClick={handleUpdateNote}>save</button>
    </Modal>
  );
};

export default UpdateNoteModal;

import React from 'react';

import Modal from 'components/Modal';

import { NoteFormType } from '../NoteGraph';

type Props = {
  handleUpdateNote: any;
  isOpenUpdateNoteModal: boolean;
  data: NoteFormType;
  changeNoteFormData: any;
};

const UpdateNoteModal = ({ handleUpdateNote, isOpenUpdateNoteModal, data, changeNoteFormData }: Props) => {
  return (
    <Modal isOpen={isOpenUpdateNoteModal}>
      {/* <TextInput type="text" label="contents" register={register} required /> */}
      <input type="text" value={data.contents} onChange={changeNoteFormData} />
      {/* <input type="hidden" value={noteInfo.id} name="id" ref={register({})} /> */}
      <button onClick={handleUpdateNote}>save</button>
    </Modal>
  );
};

export default UpdateNoteModal;

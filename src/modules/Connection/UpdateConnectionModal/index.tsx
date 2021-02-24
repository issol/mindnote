import React from 'react';

import Modal from 'components/Modal';
import { ConnectionFormType } from 'modules/Note/NoteGraph';

type Props = {
  handleUpdateConnection: () => void;
  isOpenUpdateConnectionModal: boolean;
  data: ConnectionFormType;
  changeConnectionFormData: any;
};

const UpdateConnectionModal = ({
  handleUpdateConnection,
  isOpenUpdateConnectionModal,
  data,
  changeConnectionFormData,
}: Props) => {
  return (
    <Modal isOpen={isOpenUpdateConnectionModal}>
      <input type="text" value={data.reason} onChange={changeConnectionFormData} />

      <button onClick={handleUpdateConnection}>save</button>
    </Modal>
  );
};

export default UpdateConnectionModal;

import React from 'react';

import Modal from 'components/Modal';
import { ConnectionReason } from 'modules/NoteGraph/container';

type Props = {
  handleUpdateConnection: (event: React.MouseEvent<HTMLElement>) => void;
  isOpenUpdateConnectionModal: boolean;
  data: ConnectionReason;
  changeConnectionFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

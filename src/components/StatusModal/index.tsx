import Modal from 'components/Modal';
import React from 'react';

type Props = {
  isOpenStatusModal: boolean;
  statusMessage: string;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
};

const StatusModal = ({ isOpenStatusModal, statusMessage, onClose }: Props) => {
  return (
    <Modal isOpen={isOpenStatusModal}>
      <div>{statusMessage}</div>
      <button onClick={onClose}>close</button>
    </Modal>
  );
};

export default StatusModal;

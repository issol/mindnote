import Modal from 'components/Modal';
import React from 'react';

type Props = {
  isOpenStatusModal: boolean;
  setIsOpenStatusModal: any;
  statusMessage: string;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
};

const StatusModal = ({ isOpenStatusModal, setIsOpenStatusModal, statusMessage, onClose }: Props) => {
  return (
    <Modal isOpen={isOpenStatusModal} setIsOpen={setIsOpenStatusModal}>
      <div>{statusMessage}</div>
      <button onClick={onClose}>close</button>
    </Modal>
  );
};

export default StatusModal;

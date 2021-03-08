import Modal from 'components/Modal';
import React from 'react';
import styled from 'styled-components';

type Props = {
  isOpenStatusModal: boolean;
  setIsOpenStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
  statusMessage: string;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
};

const StatusModal = ({ isOpenStatusModal, setIsOpenStatusModal, statusMessage, onClose }: Props) => {
  return (
    <Modal isOpen={isOpenStatusModal} setIsOpen={setIsOpenStatusModal}>
      <div>{statusMessage}</div>
      <CloseStatusModalButton onClick={onClose}>Close</CloseStatusModalButton>
    </Modal>
  );
};

const CloseStatusModalButton = styled.button`
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

export default StatusModal;

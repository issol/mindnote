import Modal from 'components/Modal';

import React from 'react';
import styled from 'styled-components';

type Props = {
  handleCreateConnection: () => void;
  isOpenCreateConnectionModal: boolean;
  setIsOpenCreateConnectionModal: React.Dispatch<React.SetStateAction<boolean>>;
  changeConnectionFormData: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CreateConnectionModal = ({
  isOpenCreateConnectionModal,
  setIsOpenCreateConnectionModal,
  changeConnectionFormData,
  handleCreateConnection,
}: Props) => {
  return (
    <Modal isOpen={isOpenCreateConnectionModal} setIsOpen={setIsOpenCreateConnectionModal}>
      <InputContentForm
        onChange={changeConnectionFormData}
        placeholder="노트간의 연결점을 생각해서 작성해주세요."
        maxLength={200}
      ></InputContentForm>
      <ButtonForm>
        <CancleCreateButton onClick={() => setIsOpenCreateConnectionModal(false)}>취소</CancleCreateButton>
        <CreateConnectionButton onClick={handleCreateConnection}>저장</CreateConnectionButton>
      </ButtonForm>
    </Modal>
  );
};

const CreateConnectionButton = styled.button`
  width: 40%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;
  display: block;

  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
`;

const CancleCreateButton = styled.button`
  width: 40%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;

  background: linear-gradient(to right, #dcdcdc, #e6e6e6);
  border: 0;
  outline: none;
  border-radius: 30px;
`;

const InputContentForm = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height : 270px;
  border : none;
  outline :none;
  padding: 0 10px 0 10px
  margin-bottom: 10px;
  font-size: 30px;
  resize : none;
`;

const ButtonForm = styled.div`
  display: flex;
  width: 100%;
`;

export default CreateConnectionModal;

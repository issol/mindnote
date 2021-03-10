import React from 'react';

import styled from 'styled-components';
import Modal from 'components/Modal';

type Props = {
  handleCreateArticle: () => void;
  isOpenCreateArticleModal: boolean;
  setIsOpenCreateArticleModal: React.Dispatch<React.SetStateAction<boolean>>;
  changeSubject: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  changeDescription: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CreateArticleModal = ({
  isOpenCreateArticleModal,
  setIsOpenCreateArticleModal,
  changeSubject,
  changeDescription,
  handleCreateArticle,
}: Props) => {
  return (
    <Modal isOpen={isOpenCreateArticleModal} setIsOpen={setIsOpenCreateArticleModal}>
      <TextAreaForm>
        <SubjectTextArea onChange={changeSubject} placeholder="제목을 입력해주세요." autoFocus></SubjectTextArea>
        <SubjectLine />
        <DescriptionTextArea onChange={changeDescription} placeholder="(선택)간략하게 설명해주세요."></DescriptionTextArea>
      </TextAreaForm>

      <ButtonForm>
        <CancleCreateButton onClick={() => setIsOpenCreateArticleModal(false)}>취소</CancleCreateButton>
        <CreateArticleButton onClick={handleCreateArticle}>저장</CreateArticleButton>
      </ButtonForm>
    </Modal>
  );
};

const ButtonForm = styled.div`
  display: flex;
  width: 100%;
`;

const CreateArticleButton = styled.button`
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

const TextAreaForm = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: none;
  margin-left: 10px;
  outline: none;
`;

const SubjectTextArea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  border: none;
  outline: none;
  padding: 0 10px 0 10px;
  font-size: 30px;
  resize: none;
`;

const DescriptionTextArea = styled.textarea`
  display: block;
  box-sizing : border-box;
  width :100%;
  height : 100px;
  border : none;
  outline : none;
  padding 0 10px 0 10px;
  margin-bottom :10px;
  font-size :15px;
  resize :none;

`;

const SubjectLine = styled.div`
  background: rgb(73, 80, 87);
  height: 3px;
  width: 17rem;
  margin-bottom: 10px;
  margin-left: 8px;
  border-radius: 1px;
`;

export default CreateArticleModal;

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
  ${({ theme }) => theme.common.flexRow}

  width: 100%;
`;

const CreateArticleButton = styled.button`
  ${({ theme }) => theme.common.noneLine}

  width: 40%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;

  cursor: pointer;
  display: block;

  background: linear-gradient(to right, #ff105f, #ffad06);

  border-radius: 30px;
`;

const CancleCreateButton = styled.button`
  ${({ theme }) => theme.common.noneLine}

  width: 40%;
  padding: 10px 30px;
  margin: 30px auto 0 auto;
  cursor: pointer;
  background: linear-gradient(to right, #dcdcdc, #e6e6e6);

  border-radius: 30px;
`;

const TextAreaForm = styled.div`
  ${({ theme }) => theme.common.noneLine}
  box-sizing: border-box;
  width: 100%;

  margin-left: 10px;
`;

const SubjectTextArea = styled.textarea`
  ${({ theme }) => theme.common.noneLine}

  display: block;
  box-sizing: border-box;

  width: 100%;
  height: 70px;

  padding: 0 10px 0 10px;

  resize: none;

  font-size: ${({ theme }) => theme.fontSize.contents};
`;

const DescriptionTextArea = styled.textarea`
  ${({ theme }) => theme.common.noneLine}

  display: block;
  box-sizing : border-box;

  width :100%;
  height : 100px;
  
  padding 0 10px 0 10px;
  margin-bottom :10px;
  
  resize :none;

  font-size :${({ theme }) => theme.fontSize.paragraph};

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

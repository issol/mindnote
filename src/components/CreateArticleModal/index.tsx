import TextInput from 'components/TextInput';
import React from 'react';
import styled from 'styled-components';

const CreateArticleModal = ({
  register,
  handleSubmit,
  handleCreateArticle,
  errors,
}) => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalInner>
          <form onSubmit={handleSubmit(handleCreateArticle)}>
            <TextInput
              type="text"
              label="subject"
              
              register={register}
              required
              
            />
            {errors.subject && <p>제목을 입력해주세요.</p>}
            <TextInput type="text" label="description" register={register}  placeholder=''/>
            <CreateArticleButton type="submit" value="저장" />
          </form>
        </ModalInner>
      </ModalWrapper>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;
const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const CreateArticleButton = styled.input`
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

export default CreateArticleModal;

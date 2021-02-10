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
    <form onSubmit={handleSubmit(handleCreateArticle)}>
      <TextInput type="text" label="subject" register={register} required />
      {errors.subject && <p>제목을 입력해주세요.</p>}
      <TextInput type="text" label="description" register={register} />
      <CreateArticleButton type="submit" value="저장" />
    </form>
  );
};

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

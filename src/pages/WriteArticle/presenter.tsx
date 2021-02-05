import TextInput from 'components/TextInput';
import React from 'react';

const WriteArticlePresenter = ({
  articleInfo,
  register,
  handleSubmit,
  handleUpdateArticleInfo,
  
}) => {
  return (
    <form onSubmit={handleSubmit(handleUpdateArticleInfo)}>
      
      <TextInput type="text" label="subject" register={register} required />
      <TextInput type="text" label="description" register={register} required />
      
      <input type="submit" value="저장하기" />
    </form>
  );
};

export default WriteArticlePresenter;

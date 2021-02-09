import Note from 'components/Note';
import TextInput from 'components/TextInput';
import React from 'react';


import styled from 'styled-components';


const WriteArticlePresenter = ({
  articleInfo,
  articleNoteList,
  register,
  handleSubmit,
  handleUpdateArticleInfo,
  handleCreateNote,
}) => {
  return (
    <>
    <ArticleInfoForm onSubmit={handleSubmit(handleUpdateArticleInfo)}>
      <div><TextInput type="text" label="subject" register={register} required />
      <TextInput type="text" label="description" register={register} required /></div>
      <CardWrapper>
        {articleNoteList.map((note)=>{
          return(
            <Note key={note.id} id={note.id} contents = {note.contents} createdAt = {note.createdAt}/>
          )
        })}
      </CardWrapper>
      
      <SaveButton type="submit" value="저장하기" />
      
    </ArticleInfoForm>
     <button onClick={handleCreateNote}>+</button>
     </>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  padding: 50px;
  padding-top: 70px;

  width: 100%;
  height: 100%;
`;

const ArticleInfoForm = styled.form`
  box-sizing: border-box;
  margin : 0 auto;
  width : 700px;
  height : 100%;
  
`

const SaveButton = styled.input`
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
export default WriteArticlePresenter;

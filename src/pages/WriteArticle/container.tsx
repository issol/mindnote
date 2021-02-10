import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';
import { createNote, fetchArticleDetail } from 'store/article/actions';
import { updateArticle } from 'store/articles/actions';
import WriteArticlePresenter from './presenter';

type ArticleProps = {
  id: number;
  subject : string;
  description: string;
};

type UpdateProps = {
  id: number;
  subject: string;
  description: string;
};

type NoteProps = {
 
  article : number;
  contents : string;
}

const WriteArticleContainer = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const mounted = useRef(false);

  const articleDetailReducer = useSelector(
    (state: RootState) => state.articleDetailReducer
  );

  const [articleInfo, setArticleInfo] = useState<ArticleProps>({
    id: 0,
    subject : '',
    description : '',

  });

  const [updatedArticleInfo, setUpdatedArticleInfo] = useState<UpdateProps>({
    id: 0,
    subject: '',
    description: '',
  });

  const [noteInfo, setNoteInfo] = useState<NoteProps>({

    article:0,
    contents : ''
  
  });

  const { register, handleSubmit } = useForm<UpdateProps>();

  const handleUpdateArticleInfo = (data :any) => {
    
    setUpdatedArticleInfo({
      id: articleInfo.id,
      subject: data.subject,
      description: data.description,
    });
  };

  const handleCreateNote = (data : any)=>{
    console.log(articleInfo.id);
    
    setNoteInfo({
      article : articleInfo.id,
      contents : 'n번째 테스트'
    })
  }

  useEffect(() => {
    console.log(props.location.state);
    
    setArticleInfo(props.location.state);
    
  },[props.location.state]);

  useEffect(()=>{
    if(!mounted.current){
      mounted.current = true;
    }else{
      dispatch(fetchArticleDetail.request(articleInfo.id));
    }
  },[articleInfo.id])
 

  useEffect(() => {
    dispatch(updateArticle.request(updatedArticleInfo));
    return (()=>{
      history.push("/article-list")
    })
  }, [updatedArticleInfo]);

  useEffect(()=>{
    dispatch(createNote.request(noteInfo));
  },[noteInfo])

  return (
    <WriteArticlePresenter
      articleInfo = {articleInfo}
      articleNoteList = {articleDetailReducer.articleDetail.notes}
      register={register}
      handleSubmit={handleSubmit}
      handleUpdateArticleInfo={handleUpdateArticleInfo}
      handleCreateNote = {handleCreateNote}
    />
  );
};

export default WriteArticleContainer;

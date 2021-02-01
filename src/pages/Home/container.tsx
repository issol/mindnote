import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';
import HomePresenter from './presenter';
import { fetchArticleList } from '../../store/articles/actions';

const HomeContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const articleReducer = useSelector(
    (state: RootState) => state.articleReducer
  );

  const openModalForCreateArticle = () => {
    //이부분 아티클 만드는 모달 띄우기
  };

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchArticleList.request());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <HomePresenter articleList={articleReducer.articleList} />
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default HomeContainer;

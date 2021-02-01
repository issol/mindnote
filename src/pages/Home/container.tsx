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

  const createArticle = () => {
    history.push('/create-article');
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
        <HomePresenter
          createArticle={createArticle}
          articleList={articleReducer.articleList}
        />
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default HomeContainer;

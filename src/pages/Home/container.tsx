import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';
import HomePresenter from './presenter';

const HomeContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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

  return (
    <>
      {isLoggedIn ? (
        <HomePresenter
          createArticle={createArticle}
          articleReducer={articleReducer}
        />
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default HomeContainer;

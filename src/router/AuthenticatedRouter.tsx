import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ArticleList from 'pages/ArticleList';
import WriteArticle from 'pages/WriteArticle';
import Auth from 'pages/Auth';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const AuthenticatedRouter = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);

  return (
    <>
      {userReducer.isLoggedIn ? null : <Redirect to="/" />}

      <Route exact path="/article-list" component={ArticleList} />
      <Route path="/article/:id" component={WriteArticle} />
    </>
  );
};

export default AuthenticatedRouter;

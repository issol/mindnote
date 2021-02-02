import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ArticleList from 'pages/ArticleList';
import Auth from 'pages/Auth';
import ArticleForm from 'pages/ArticleForm';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exatt path="/note-list" component={ArticleList} />
        <Route exact path="/create-article" component={ArticleForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;

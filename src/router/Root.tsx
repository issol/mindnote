import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ArticleList from 'pages/ArticleList';
import WriteArticle from 'pages/WriteArticle';
import Auth from 'pages/Auth';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/note-list" component={ArticleList} />
        <Route path="/article/:id" component={WriteArticle} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;

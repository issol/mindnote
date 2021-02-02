import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ArticleList from 'pages/ArticleList';
import Auth from 'pages/Auth';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exatt path="/note-list" component={ArticleList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;

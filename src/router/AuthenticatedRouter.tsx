import { Redirect, Route } from 'react-router-dom';

import ArticleList from 'pages/ArticleList';
import ArticleDetail from 'pages/ArticleDetail';
import WriteArticle from 'pages/WrtieArticle';
import MyArticle from 'pages/MyArticle';
import PublishedArticle from 'pages/PublishedArticle';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

const AuthenticatedRouter = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);

  const getRouteListOrRedirect = () => {
    switch (userReducer.isLoggedIn) {
      case null:
        return null;
      case true:
        return (
          <>
            <Route exact path="/article-list" component={ArticleList} />
            <Route path="/article/:id" component={ArticleDetail} />
            <Route path="/write-article/:id" component={WriteArticle} />
            <Route path="/my-article" component={MyArticle} />
            <Route path="/published-article/:id" component={PublishedArticle} />
          </>
        );
      case false:
        return <Redirect to="/" />;
    }
  };

  return getRouteListOrRedirect();
};

export default AuthenticatedRouter;

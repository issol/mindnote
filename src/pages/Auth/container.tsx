import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { RootState } from 'store';
import AuthPresenter from './presenter';

export type AuthType = 'LogIn' | 'SignUp';

const AuthContainer = () => {
  const [authType, setAuthType] = useState<AuthType>('LogIn');

  const userReducer = useSelector((state: RootState) => state.userReducer);

  const handleAuthType = (type: AuthType) => (e: any) => {
    setAuthType(type);
  };

  return (
    <>
      {userReducer.isLoggedIn ? (
        <Redirect to="/article-list" />
      ) : (
        <AuthPresenter authType={authType} handleAuthType={handleAuthType} />
      )}
    </>
  );
};

export default AuthContainer;

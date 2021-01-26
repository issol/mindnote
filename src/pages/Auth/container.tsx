import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'store';
import AuthPresenter from './presenter';

const AuthContainer = () => {
  const [changeAuthType, setChangeAuthType] = useState(true);
  const handleAuthType = () => setChangeAuthType((type) => !type);
  const userReducer = useSelector((state: RootState) => state.userReducer);
  return (
    <>
      {userReducer.isLoggedIn ? (
        <Redirect to="/home" />
      ) : (
        <AuthPresenter
          changeAuthType={changeAuthType}
          handleAuthType={handleAuthType}
        />
      )}
    </>
  );
};

export default AuthContainer;

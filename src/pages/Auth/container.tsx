import React, { useEffect, useState } from 'react';
import AuthPresenter from './presenter';

const AuthContainer = () => {
  useEffect(() => {
    console.log(localStorage.getItem('token'));
  });
  const [changeAuthType, setChangeAuthType] = useState(true);
  const handleAuthType = () => setChangeAuthType((type) => !type);
  return (
    <AuthPresenter
      changeAuthType={changeAuthType}
      handleAuthType={handleAuthType}
    />
  );
};

export default AuthContainer;

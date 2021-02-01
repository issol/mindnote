import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { setSignUpInfo, signUp } from 'store/users/actions';
import SignUpPresenter from './presenter';
import StatusModal from 'components/StatusModal';

const SignUpContainer = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const changeEmail = (value: string) => {
    dispatch(setSignUpInfo({ email: value }));
  };

  const changePassword = (value: string) => {
    dispatch(setSignUpInfo({ password: value }));
  };

  const changeName = (value: string) => {
    dispatch(setSignUpInfo({ name: value }));
  };

  const handelSignUp = () => {
    dispatch(signUp.request(userReducer.signUpInfo));
    setIsOpenModal(true);
  };

  useEffect(() => {
    if (userReducer.errorMessage !== '') {
      setErrorMessage(userReducer.errorMessage);
      setIsOpenModal(true);
    }
  }, [userReducer.errorMessage]);

  return (
    <>
      <StatusModal
        statusMessage={errorMessage}
        show={isOpenModal}
        onHide={() => setIsOpenModal(false)}
      />

      <SignUpPresenter
        userReducer={userReducer}
        changeEmail={changeEmail}
        changePassword={changePassword}
        changeName={changeName}
        handelSignUp={handelSignUp}
      />
    </>
  );
};

export default SignUpContainer;

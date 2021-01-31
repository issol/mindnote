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
  const [modalShow, setModalShow] = useState(false);

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
    if (isValid()) {
      dispatch(signUp.request(userReducer.signUpInfo));
      setModalShow(true);
    }
  };
  useEffect(() => {
    if (userReducer.statusMessage !== '') {
      if (userReducer.statusMessage.includes('already')) {
        setErrorMessage('이미 동일한 이메일이 존재합니다');
      } else if (userReducer.statusMessage.includes('valid')) {
        setErrorMessage('유효한 이메일 형식을 입력해주세요.');
      }
    }
  }, [userReducer.statusMessage]);

  const isValid = () => {
    if (userReducer.signUpInfo.email === '') {
      setErrorMessage('아이디를 입력해주세요.');
    } else if (userReducer.signUpInfo.password === '') {
      setErrorMessage('비밀번호를 입력해주세요.');
    } else if (userReducer.signUpInfo.name === '') {
      setErrorMessage('이름을 입력해주세요.');
    }
    return true;
  };

  return (
    <>
      {modalShow ? (
        <StatusModal
          statusMessage={errorMessage}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : null}
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

import React from 'react';

import LogIn from 'modules/Auth/LogIn';
import SignUp from 'modules/Auth/SingUp';

import styled from 'styled-components';
import { AuthType } from './container';

type AuthTypeProps = {
  authType: string;
  handleAuthType: (type: AuthType) => (event: React.MouseEvent<HTMLElement>) => void;
};
type ButtonProps = {
  authType: string;
};

const AuthPresenter = ({ authType, handleAuthType }: AuthTypeProps) => {
  return (
    <WholeWrap>
      <FormWrap>
        <ButtonWrap>
          <LoginButton authType={authType} onClick={handleAuthType('LogIn')}>
            LogIn
          </LoginButton>
          <SignUpButton authType={authType} onClick={handleAuthType('SignUp')}>
            SignUp
          </SignUpButton>
        </ButtonWrap>
        {authType === 'LogIn' ? <LogIn /> : <SignUp />}
      </FormWrap>
    </WholeWrap>
  );
};

const WholeWrap = styled.div`
  height: 100%;
  width: 100%;

  background-position: center;
  background-size: cover;
  position: absolute;
`;

const FormWrap = styled.div`
  width: 380px;
  height: 580px;
  position: relative;
  margin: 6% auto;
  background: #fff;
  padding: 5px;
`;

const ButtonWrap = styled.div`
  width: 60%;
  height: 50px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 600px 9px #fcae8f;
  border-radius: 30px;
`;

const CommonButton = styled.button`
  position: relative;
  width: 110px;
  height: 100%;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  border: none;
`;

const LoginButton = styled(CommonButton)<ButtonProps>`
  background: ${(props) => (props.authType === 'LogIn' ? 'linear-gradient(to right, #ff105f, #ffad06);' : 'white;')};
`;

const SignUpButton = styled(CommonButton)<ButtonProps>`
  background: ${(props) => (props.authType === 'SignUp' ? 'linear-gradient(to right, #ff105f, #ffad06);' : 'white;')};
`;

export default AuthPresenter;

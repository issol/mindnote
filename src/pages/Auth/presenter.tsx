import React from 'react';
import LogIn from 'modules/LogIn';
import SignUp from 'modules/SingUp';
import styled from 'styled-components';
import Switch from 'react-switch';
import './styles.css';

type AuthTypeProps = {
  authType: string;
  handleAuthType: (event: React.MouseEvent<HTMLElement>) => void;
};
type ButtonProps = {
  authType: string;
};

const AuthPresenter = ({ authType, handleAuthType }: AuthTypeProps) => {
  return (
    <div className="wrap">
      <div className="form-wrap">
        <div className="button-wrap">
          <LoginButton authType={authType} onClick={handleAuthType}>
            LogIn
          </LoginButton>
          <SignUpButton authType={authType} onClick={handleAuthType}>
            SignUp
          </SignUpButton>
        </div>
        {authType === 'LogIn' ? <LogIn /> : <SignUp />}
      </div>
    </div>
  );
};

const LoginButton = styled.button<ButtonProps>`
  position: relative;
  width: 110px;
  height: 50px;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  border: none;
  background: ${(props) => {
    if (props.authType === 'LogIn') {
      return 'linear-gradient(to right, #ff105f, #ffad06);';
    } else {
      return 'white;';
    }
  }};
`;

const SignUpButton = styled.button<ButtonProps>`
  position: relative;
  width: 110px;
  height: 50px;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  border: none;
  background: ${(props) => {
    if (props.authType === 'SignUp') {
      return 'linear-gradient(to right, #ff105f, #ffad06);';
    } else {
      return 'white;';
    }
  }};
`;

export default AuthPresenter;

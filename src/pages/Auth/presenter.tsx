import React from 'react';

import LogIn from 'modules/Auth/LogIn';
import SignUp from 'modules/Auth/SingUp';

import styled from 'styled-components';
import { AuthType } from './container';

import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { googleLogIn } from 'store/user/actions';

import mainImage from 'assets/images/mainImage.jpg';

type AuthTypeProps = {
  authType: string;
  handleAuthType: (type: AuthType) => () => void;
};
type ButtonProps = {
  authType: string;
};

const AuthPresenter = ({ authType, handleAuthType }: AuthTypeProps) => {
  const dispatch = useDispatch();

  const responseGoogle = (response: any) => {
    dispatch(googleLogIn.request({ oAuthToken: response.accessToken }));
  };
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

        <GoogleLoginButton
          clientId='475949578269-0gbudsp2q3bova12ilcibkmmtrfg0v8m.apps.googleusercontent.com'
          buttonText='구글로 로그인'
          icon={true}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </FormWrap>
    </WholeWrap>
  );
};

const WholeWrap = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${mainImage});

  background-position: center;
  background-size: cover;
  position: absolute;
`;

const FormWrap = styled.div`
  width: 380px;
  height: 530px;
  position: relative;
  margin: 6% auto;
  background: #ffffff;
  opacity: 0.87;
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
  ${({ theme }) => theme.common.noneLine}
  position: relative;
  width: 110px;
  height: 100%;
  border-radius: 30px;
  cursor: pointer;
`;

const GoogleLoginButton = styled(GoogleLogin)`
  width: 75%;
  margin-left: 45px;
  padding-left: 10px;
`;

const LoginButton = styled(CommonButton)<ButtonProps>`
  background: ${(props) => (props.authType === 'LogIn' ? 'linear-gradient(to right, #ff105f, #ffad06);' : 'white;')};
`;

const SignUpButton = styled(CommonButton)<ButtonProps>`
  background: ${(props) => (props.authType === 'SignUp' ? 'linear-gradient(to right, #ff105f, #ffad06);' : 'white;')};
`;

export default AuthPresenter;

import { ActionType } from 'typesafe-actions';

import { logIn, setLogInInfo, signUp, setSignUpInfo, eraseErrorMessage, googleLogIn } from './actions';

export type LogInInfo = {
  email: string;
  password: string;
};

export type GoogleLogInInfo = {
  token: string;
};

export type SignUpInfo = {
  email: string;
  password: string;
  name: string;
};

export type SetLogInInfoPayload = Required<LogInInfo>;
export type SetSignUpInfoPayload = Required<SignUpInfo>;

export type UserState = {
  isLoggedIn: boolean | null;
  errorMessage: string;
  logInInfo: LogInInfo;
  signUpInfo: SignUpInfo;
};

export type UserAction =
  | ActionType<typeof logIn>
  | ActionType<typeof signUp>
  | ActionType<typeof googleLogIn>
  | ActionType<typeof setSignUpInfo>
  | ActionType<typeof setLogInInfo>
  | ActionType<typeof eraseErrorMessage>;

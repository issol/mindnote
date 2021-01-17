import { ActionType } from "typesafe-actions";
import { logIn, setLogInInfo, signUp, setSignUpInfo } from "./actions";

export type LogInInfo = {
  email: string;
  password: string;
};

export type SignUpInfo = {
  username: string;
  email: string;
  password: string;
};

export type SetLogInInfoPayload = Partial<LogInInfo>;
export type SetSignUpInfoPayload = Partial<SignUpInfo>;

export type UserState = {
  isLoggedIn: boolean;
  logInInfo: LogInInfo;
  signUpInfo: SignUpInfo;
};

export type UserAction =
  | ActionType<typeof logIn>
  | ActionType<typeof signUp>
  | ActionType<typeof setSignUpInfo>
  | ActionType<typeof setLogInInfo>;

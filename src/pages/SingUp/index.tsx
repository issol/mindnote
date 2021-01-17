import TextInput from "components/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { signUp, setSignUpInfo } from "store/users/actions";
import React from "react";
import { RootState } from "store";

const SignUp = () => {
  const userReducer = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const nameChange = (value: string) => {
    dispatch(setSignUpInfo({ username: value }));
  };
  const emailChange = (value: string) => {
    dispatch(setSignUpInfo({ email: value }));
  };
  const passwordChange = (value: string) => {
    dispatch(setSignUpInfo({ password: value }));
  };
  const SignUpHandler = (e: any) => {
    e.preventDefault();
    dispatch(signUp.request(userReducer.signUpInfo));
  };

  return (
    <>
      <form id="register" action="" className="input-group">
        <TextInput
          type={"text"}
          label={"Name"}
          value={userReducer.signUpInfo.username}
          onChange={nameChange}
        />
        <TextInput
          type={"email"}
          label={"Email"}
          value={userReducer.signUpInfo.email}
          onChange={emailChange}
        />
        <TextInput
          type={"password"}
          label={"Password"}
          value={userReducer.signUpInfo.password}
          onChange={passwordChange}
        />
        <button className="submit" onClick={SignUpHandler}>
          SignUp
        </button>
      </form>
    </>
  );
};

export default SignUp;

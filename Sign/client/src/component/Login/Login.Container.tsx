/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../_action/user_action";
import LoginPageUI from "./Login.Presenter";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLoginButton: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const body = {
      email,
      password,
    };
    // @ts-ignore
    dispatch(loginUser(body)).then((res) => {
      if (res.payload) {
        navigate("/");
      } else {
        alert("err");
      }
    });
  };

  const onClickSignUpButton = () => {
    navigate("/register");
  };

  return (
    <LoginPageUI
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLoginButton={onClickLoginButton}
      onClickSignUpButton={onClickSignUpButton}
    />
  );
}

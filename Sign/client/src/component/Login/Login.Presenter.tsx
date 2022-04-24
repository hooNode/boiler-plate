import React from "react";
import { LoginProps } from "../../common/types/types";
import * as S from "./Login.Style";

export default function LoginPageUI(props: LoginProps) {
  return (
    <S.Wrapper>
      <S.LoginContainer onSubmit={props.onClickLoginButton}>
        <S.EmailText>Email</S.EmailText>
        <S.EmailInput
          type="text"
          value={props.email}
          onChange={props.onChangeEmail}
        />
        <S.PasswordTitle>Password</S.PasswordTitle>
        <S.PasswordInput
          type="password"
          autoComplete="off"
          value={props.password}
          onChange={props.onChangePassword}
        />
        <S.LoginButton type="submit">login</S.LoginButton>
      </S.LoginContainer>
    </S.Wrapper>
  );
}

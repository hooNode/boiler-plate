import React from "react";
import Blank from "../../common/Blank";
import { LoginProps, RegisterProps } from "../../common/types/types";
import * as S from "./Register.Style";

export default function RegisterPageUI(props: RegisterProps) {
  return (
    <S.Wrapper>
      <S.LoginContainer onSubmit={props.onClickSignUpButton}>
        <S.EmailText>Email</S.EmailText>
        <S.EmailInput
          type="email"
          value={props.email}
          onChange={props.onChangeEmail}
        />
        {props.isRequiredEmail ? (
          <Blank height="10px" />
        ) : (
          <S.ErrorMessage>이메일을 입력해주세요.</S.ErrorMessage>
        )}
        <S.EmailText>Name</S.EmailText>
        <S.EmailInput
          type="text"
          value={props.name}
          onChange={props.onChangeName}
        />
        {props.isRequiredName ? (
          <Blank height="10px" />
        ) : (
          <S.ErrorMessage>이름을 입력해주세요.</S.ErrorMessage>
        )}
        <S.PasswordTitle>Password</S.PasswordTitle>
        <S.PasswordInput
          type="password"
          autoComplete="off"
          value={props.password}
          onChange={props.onChangePassword}
        />
        {props.isRequiredPassword ? (
          <Blank height="10px" />
        ) : (
          <S.ErrorMessage>비밀번호를 입력해주세요.</S.ErrorMessage>
        )}
        <S.PasswordTitle>Confirm Password</S.PasswordTitle>
        <S.PasswordInput
          type="password"
          autoComplete="off"
          value={props.confirmPassword}
          onChange={props.onChangeConfirmPassword}
        />
        {props.isMatch ? (
          <Blank height="10px" />
        ) : (
          <S.ErrorMessage>비밀번호가 다릅니다.</S.ErrorMessage>
        )}
        <Blank height="10px" />
        <S.LoginButton type="submit">Sign Up</S.LoginButton>
      </S.LoginContainer>
    </S.Wrapper>
  );
}

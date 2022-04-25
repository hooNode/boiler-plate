import { ChangeEvent, FormEvent, FormEventHandler, MouseEvent } from "react";
import { NavigateFunction } from "react-router-dom";

export interface LoginProps {
  email: string;
  password: string;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickLoginButton: (e: FormEvent<HTMLFormElement>) => void;
  onClickSignUpButton: () => void;
}

export interface RegisterProps {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUpButton: (e: FormEvent<HTMLFormElement>) => void;
  isMatch: boolean;
  isRequiredEmail: boolean;
  isRequiredName: boolean;
  isRequiredPassword: boolean;
}

export interface NavbarProps {
  isLogin: boolean;
  onClickLogOut: () => void;
  navigate: NavigateFunction;
}

export interface LoginUserResponse {
  email: string;
  password: string;
}
export interface CreateUserResponse {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

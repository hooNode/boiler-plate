import { ChangeEvent, FormEvent, FormEventHandler, MouseEvent } from "react";

export interface LoginProps {
  email: string;
  password: string;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickLoginButton: (e: FormEvent<HTMLFormElement>) => void;
}

export interface CreateUserResponse {
  email: string;
  password: string;
}

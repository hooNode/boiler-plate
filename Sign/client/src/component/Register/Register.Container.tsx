import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../_action/user_action";
import RegisterPageUI from "./Register.Presenter";

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);
  const [isRequiredEmail, setIsRequiredEmail] = useState(true);
  const [isRequiredName, setIsRequiredName] = useState(true);
  const [isRequiredPassword, setIsRequiredPassword] = useState(true);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const onClickSignUpButton: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (email === "") {
      setIsRequiredEmail(false);
    } else {
      setIsRequiredEmail(true);
    }
    if (password === "") {
      setIsRequiredPassword(false);
    } else {
      setIsRequiredPassword(true);
    }
    if (name === "") {
      setIsRequiredName(false);
    } else {
      setIsRequiredName(true);
    }

    if (password !== confirmPassword) {
      setIsMatch(false);
    } else {
      setIsMatch(true);
    }

    const body = {
      email,
      name,
      password,
      confirmPassword,
    };
    const isTrue = [
      isMatch,
      isRequiredPassword,
      isRequiredName,
      isRequiredEmail,
    ];
    if (!isTrue.every((el) => el)) return;
    // @ts-ignore
    dispatch(registerUser(body)).then((res) => {
      if (res.payload) {
        navigate("/login");
      } else {
        alert("err");
      }
    });
  };

  return (
    <RegisterPageUI
      email={email}
      name={name}
      password={password}
      confirmPassword={confirmPassword}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
      onClickSignUpButton={onClickSignUpButton}
      isMatch={isMatch}
      isRequiredEmail={isRequiredEmail}
      isRequiredName={isRequiredName}
      isRequiredPassword={isRequiredPassword}
    />
  );
}

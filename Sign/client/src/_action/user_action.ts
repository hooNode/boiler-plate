import axios from "axios";
import { CreateUserResponse, LoginUserResponse } from "../common/types/types";
import { AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./types";

export async function loginUser(dataToSubmit: LoginUserResponse) {
  const request = await axios
    .post("/api/users/login", dataToSubmit)
    .then((res) => res.data);
  let loginState;
  if (request.loginSuccess) {
    loginState = true;
  } else {
    loginState = false;
  }
  return {
    type: LOGIN_USER,
    payload: loginState,
  };
}

export async function registerUser(dataToSubmit: CreateUserResponse) {
  const request = await axios
    .post("/api/users/register", dataToSubmit)
    .then((res) => res.data);
  let loginState;
  if (request.success) {
    loginState = true;
  } else {
    loginState = false;
  }
  return {
    type: REGISTER_USER,
    payload: loginState,
  };
}

export async function auth() {
  const request = await axios.get("/api/users/auth").then((res) => res.data);

  let loginState;
  if (request.isAuth) {
    loginState = true;
  } else {
    loginState = false;
  }
  return {
    type: AUTH_USER,
    payload: loginState,
  };
}

export async function logout() {
  const request = await axios.get("/api/users/logout").then((res) => res.data);

  let loginState;
  if (request.success) {
    loginState = false;
  } else {
    loginState = true;
  }
  return {
    type: LOGOUT_USER,
    payload: loginState,
  };
}

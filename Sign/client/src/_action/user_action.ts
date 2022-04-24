import axios from "axios";
import { CreateUserResponse } from "../common/types/types";
import { LOGIN_USER } from "./types";

export function loginUser(dataToSubmit: CreateUserResponse) {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((res) => res.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

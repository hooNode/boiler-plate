// import { LOGIN_USER } from "../../../../first/client/src/_actions/types";

const LOGIN_USER = "LOGIN_USER";
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    default:
      return state;
  }
}

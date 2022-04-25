import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_action/types";

// const LOGIN_USER = "LOGIN_USER";
export default function (state = {}, action: any) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;

    case REGISTER_USER:
      return { ...state, register: action.payload };
      break;

    case AUTH_USER:
      return { ...state, userData: action.payload };
      break;

    default:
      return state;
  }
}

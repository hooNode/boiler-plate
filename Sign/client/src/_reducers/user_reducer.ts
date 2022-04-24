import { LOGIN_USER } from "../_action/types";

// const LOGIN_USER = "LOGIN_USER";
export default function (state = {}, action: any) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    default:
      return state;
  }
}

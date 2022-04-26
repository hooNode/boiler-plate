import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
} from "../_action/types";

export default function (state = {}, action: any) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginState: action.payload };
      break;

    case REGISTER_USER:
      return { ...state, loginState: action.payload };
      break;

    case AUTH_USER:
      return { ...state, loginState: action.payload };
      break;

    case LOGOUT_USER:
      return { ...state, loginState: action.payload };
      break;

    default:
      return state;
  }
}

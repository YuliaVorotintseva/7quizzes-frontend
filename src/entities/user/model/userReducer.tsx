import {
  USER_AUTH_ERROR,
  USER_AUTH_FETCH,
  USER_AUTH_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTRATION_ERROR,
  USER_REGISTRATION_FETCH,
  USER_REGISTRATION_SUCCESS,
  UserAction,
  UserState,
} from "./actionTypes";

const initialState: UserState = {
  name: null,
  email: null,
  password: null,
  isAuthorized: false,
};

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USER_AUTH_FETCH:
    case USER_REGISTRATION_FETCH:
      return {
        ...state,
        isAuthorized: false,
      };
    case USER_AUTH_SUCCESS:
    case USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.password,
        isAuthorized: true,
      };
    case USER_LOGOUT_SUCCESS:
    case USER_AUTH_ERROR:
    case USER_REGISTRATION_ERROR:
      return {
        ...state,
        isAuthorized: false,
      };
    default:
      return state;
  }
};

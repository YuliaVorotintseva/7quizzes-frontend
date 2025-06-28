import {
  USER_AUTH_ERROR,
  USER_AUTH_FETCH,
  USER_AUTH_SUCCESS,
  USER_REGISTRATION_ERROR,
  USER_REGISTRATION_FETCH,
  USER_REGISTRATION_SUCCESS,
  UserAction,
  UserState,
} from "./actionTypes";

const initialState: UserState = {
  username: null,
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
      return {
        ...state,
        email: action.email,
        password: action.password,
        isAuthorized: true,
      };
    case USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        username: action.username,
        email: action.email,
        password: action.password,
        isAuthorized: true,
      };
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

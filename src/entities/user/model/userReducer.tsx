import {
  USER_AUTH_ERROR,
  USER_AUTH_FETCH,
  USER_AUTH_SUCCESS,
  UserAction,
  UserState,
} from "./actionTypes";

const initialState: UserState = {
  email: null,
  password: null,
  isAuthorized: false,
};

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USER_AUTH_FETCH:
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
    case USER_AUTH_ERROR:
      return {
        ...state,
        isAuthorized: false,
      };
    default:
      return state;
  }
};

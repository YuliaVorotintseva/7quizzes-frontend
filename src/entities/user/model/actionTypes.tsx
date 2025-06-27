export const USER_AUTH_FETCH = "USER_AUTH_FETCH";
export const USER_AUTH_SUCCESS = "USER_AUTH_SUCCESS";
export const USER_AUTH_ERROR = "USER_AUTH_ERROR";

export interface UserState {
  email: string | null;
  password: string | null;
  isAuthorized: boolean;
}

export interface UserAction {
  type: string;
  email?: string;
  password?: string;
}

export interface UserAuthFetchAction extends UserAction {
  type: typeof USER_AUTH_FETCH;
}

export interface UserAuthSuccessAction extends UserAction {
  type: typeof USER_AUTH_SUCCESS;
  email: string;
  password: string;
}

export interface UserAuthErrorAction extends UserAction {
  type: typeof USER_AUTH_ERROR;
}

export const USER_AUTH_FETCH = "USER_AUTH_FETCH";
export const USER_AUTH_SUCCESS = "USER_AUTH_SUCCESS";
export const USER_AUTH_ERROR = "USER_AUTH_ERROR";

export const USER_REGISTRATION_FETCH = "USER_REGISTRATION_FETCH";
export const USER_REGISTRATION_SUCCESS = "USER_REGISTRATION_SUCCESS";
export const USER_REGISTRATION_ERROR = "USER_REGISTRATION_ERROR";

export interface UserState {
  username: string | null;
  email: string | null;
  password: string | null;
  isAuthorized: boolean;
}

export interface UserAction {
  type: string;
  username?: string | null | undefined;
  email?: string | null | undefined;
  password?: string | null | undefined;
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

export interface UserRegistrationFetchAction extends UserAction {
  type: typeof USER_REGISTRATION_FETCH;
}

export interface UserRegistrationSuccessAction extends UserAction {
  type: typeof USER_REGISTRATION_SUCCESS;
  username: string;
  email: string;
  password: string;
}

export interface UserRegistrationErrorAction extends UserAction {
  type: typeof USER_REGISTRATION_ERROR;
}

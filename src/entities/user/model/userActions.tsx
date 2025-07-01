import { Dispatch } from "redux";
import {
  USER_AUTH_ERROR,
  USER_AUTH_FETCH,
  USER_AUTH_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTRATION_ERROR,
  USER_REGISTRATION_FETCH,
  USER_REGISTRATION_SUCCESS,
  UserAction,
} from "./actionTypes";
import { fetchPOST } from "../../../shared/api/fetcher";

type LoginType = {
  email: string | null;
  password: string | null;
};

type RegistrationType = {
  name: string;
  email: string | null;
  password: string | null;
};

export const login =
  ({ email, password }: LoginType) =>
  async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: USER_AUTH_FETCH,
    });

    try {
      const response = await fetchPOST(
        "signin",
        JSON.stringify({ email: email, password: password }),
      );

      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

      dispatch({
        type: USER_AUTH_SUCCESS,
        email: response.email,
        password: response.password,
      });
    } catch (error) {
      dispatch({
        type: USER_AUTH_ERROR,
      });
      console.log(error);
      throw error;
    }
  };

export const registration =
  ({ name, email, password }: RegistrationType) =>
  async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: USER_REGISTRATION_FETCH,
    });
    localStorage.setItem("name", name);

    try {
      await fetchPOST(
        "signup",
        JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      );

      dispatch({
        type: USER_REGISTRATION_SUCCESS,
        name: name,
        email: email,
        password: password,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTRATION_ERROR,
      });
      console.log(error);
      throw error;
    }
  };

export const logout = () => async (dispatch: Dispatch<UserAction>) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("name");

  dispatch({
    type: USER_LOGOUT_SUCCESS,
  });
};

import { Dispatch } from "redux";
import {
  USER_AUTH_ERROR,
  USER_AUTH_FETCH,
  USER_AUTH_SUCCESS,
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
  username: string | null;
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
    }
  };

export const registration =
  ({ username, email, password }: RegistrationType) =>
  async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: USER_REGISTRATION_FETCH,
    });

    try {
      await fetchPOST(
        "signup",
        JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      );

      dispatch({
        type: USER_REGISTRATION_SUCCESS,
        username: username,
        email: email,
        password: password,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTRATION_ERROR,
      });
      console.log(error);
    }
  };

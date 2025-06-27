import { Dispatch } from "redux";
import {
  USER_AUTH_ERROR,
  USER_AUTH_FETCH,
  USER_AUTH_SUCCESS,
  UserAction,
} from "./actionTypes";
import { fetchPOST } from "../../../shared/api/fetcher";

type LoginType = {
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

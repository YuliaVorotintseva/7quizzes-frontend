import { Dispatch } from "redux";

import { GET_RULES, GetRulesAction } from "../../../app/types";
import { AppThunk } from "../../../app/store";

export const getRules =
  (): AppThunk => async (dispatch: Dispatch<GetRulesAction>) => {
    dispatch({
      type: GET_RULES,
      rules: [],
    });

    try {
      const result = await fetch("/RulesAPIData.json").then((response) =>
        response.json(),
      );

      dispatch({
        type: GET_RULES,
        rules: result.rules,
      });
    } catch (error) {
      console.log("Error fetching rules: ", error);
    }
  };

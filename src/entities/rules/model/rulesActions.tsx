import { Dispatch } from "redux";

import { GET_RULES, GetRulesAction } from "./actionTypes";
import { AppThunk } from "../../../app/storeTypes";
import { getRulesData } from "../api/RulesAPI.mock";

export const getRules =
  (): AppThunk => async (dispatch: Dispatch<GetRulesAction>) => {
    dispatch({
      type: GET_RULES,
      rules: [],
    });

    try {
      const rules = await getRulesData();

      dispatch({
        type: GET_RULES,
        rules: rules,
      });
    } catch (error) {
      console.log("Error fetching rules: ", error);
    }
  };

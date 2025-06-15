import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRules } from "../../../entities/rules/model/rulesActions";
import { AppDispatch, RootState } from "../../../app/storeTypes";
import Loader from "../../../components/Loader/Loader";

import "./rulesUI.css";

const RulesUI = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { rules, isLoading } = useSelector(
    (state: RootState) => state.rulesReducer,
  );

  useEffect(() => {
    if (isLoading) {
      dispatch(getRules());
    }
  }, [dispatch, isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="rules__info">
          {rules.map((rule, i) => (
            <p className="rules__info-topic" key={i}>
              {rule}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default RulesUI;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import GameRules from "../../components/GameRules/GameRules";
import Loader from "../../components/Loader/Loader";
import { getRules } from "../../entities/rules/model/rulesActions";
import { AppDispatch, RootState } from "../../app/storeTypes";

const GameStart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.rulesReducer);

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
        <GameLayout className="start">
          <GameRules />
        </GameLayout>
      )}
    </>
  );
};

export default GameStart;

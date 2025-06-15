import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import GameRules from "../../components/GameRules/GameRules";
import Loader from "../../components/Loader/Loader";
import { AppDispatch, RootState } from "../../app/store";
import { getRules } from "../../entities/Rules/model/rulesActions";

const GameStart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.rules);

  useEffect(() => {
    if (isLoading) {
      dispatch(getRules());
      console.log("loading is true");
    } else {
      console.log("loading is false");
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

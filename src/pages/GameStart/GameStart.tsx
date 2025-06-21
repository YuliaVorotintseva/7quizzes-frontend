import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import GameRules from "../../components/GameRules/GameRules";
import Loader from "../../components/Loader/Loader";
import { AppDispatch } from "../../app/storeTypes";
import { useGetRulesDataQuery } from "@/entities/rules/api/RulesAPI";
import { getRules } from "@/entities/rules/model/rulesActions";

const GameStart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useGetRulesDataQuery();

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

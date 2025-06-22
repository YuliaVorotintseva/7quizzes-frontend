import React from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import GameRules from "../../components/GameRules/GameRules";
import Loader from "../../components/Loader/Loader";
import { useGetRulesDataQuery } from "../../entities/rules/api/RulesAPI";

const GameStart = () => {
  const { isLoading } = useGetRulesDataQuery();

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

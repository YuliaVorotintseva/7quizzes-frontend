import React from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import GameRules from "../../components/GameRules/GameRules";
import { getRules } from "../../entities/rules/api/RulesAPI.mock";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";

const GameStart = () => {
  return (
    <GameLayout className="start">
      <GameRules
        rules={isMocked ? getRules() : ["Rule 1", "Rule 2", "Rule 3"]}
      />
    </GameLayout>
  );
};

export default GameStart;

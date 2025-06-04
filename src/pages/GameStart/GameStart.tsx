import React from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import GameRules from "../../components/GameRules/GameRules";

const GameStart = () => {
  return (
    <GameLayout className="start">
      <GameRules />
    </GameLayout>
  );
};

export default GameStart;

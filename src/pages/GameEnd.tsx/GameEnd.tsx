import React from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import ShowTotalScoreUI from "../../entities/score/ui/showTotalScoreUI";

const GameEnd = () => (
  <GameLayout className="end">
    <ShowTotalScoreUI />
  </GameLayout>
);

export default GameEnd;

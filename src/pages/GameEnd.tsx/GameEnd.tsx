import React from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import Finish from "../../components/Finish/Finish";
import { useTotalScore } from "../../app/App";

const GameEnd = () => {
  const { totalScore } = useTotalScore();
  return (
    <GameLayout className="end">
      <Finish score={totalScore} />
    </GameLayout>
  );
};

export default GameEnd;

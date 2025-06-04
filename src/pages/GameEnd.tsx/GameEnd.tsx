import React from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import Finish from "../../components/Finish/Finish";

const GameEnd = () => {
  return (
    <GameLayout className="end">
      <Finish score={10} />
    </GameLayout>
  );
};

export default GameEnd;

import React, { useEffect, useState } from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import GameRules from "../../components/GameRules/GameRules";
import { getRules } from "../../entities/rules/api/RulesAPI.mock";

const isMocked: boolean = import.meta.env.VITE_MOCKED;

const GameStart = () => {
  const [rules, setRules] = useState(Array<string>);
  useEffect(() => {
    const loadRules = async () => {
      const mockRules = await getRules();
      setRules(mockRules);
    };
    loadRules();
  }, []);

  return (
    <GameLayout className="start">
      <GameRules rules={isMocked ? rules : ["Rule 1", "Rule 2", "Rule 3"]} />
    </GameLayout>
  );
};

export default GameStart;

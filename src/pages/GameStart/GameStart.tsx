import React, { useEffect, useState } from "react";

import GameLayout from "../../layouts/GameLayout/GameLayout";
import GameRules from "../../components/GameRules/GameRules";
import { getRules } from "../../entities/rules/api/RulesAPI.mock";
import Loader from "../../components/Loader/Loader";

const isMocked: boolean = import.meta.env.VITE_MOCKED === "true";

const GameStart = () => {
  const [rules, setRules] = useState(Array<string>);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const loadRules = async () => {
      setLoading(true);
      try {
        const mockRules = await getRules();
        setRules(mockRules);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    loadRules();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <GameLayout className="start">
          <GameRules
            rules={isMocked ? rules : ["Rule 1", "Rule 2", "Rule 3"]}
          />
        </GameLayout>
      )}
    </>
  );
};

export default GameStart;

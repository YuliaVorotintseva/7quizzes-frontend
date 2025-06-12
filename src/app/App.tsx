import React, { createContext, useContext, useState } from "react";
import Router from "./Router";

import ITotalScore from "../interfaces/ITotalScore";

const TotalScore = createContext<ITotalScore | null>(null);

export const useTotalScore = () => {
  const context = useContext(TotalScore);
  if (!context) {
    throw new Error("useTotalScore must be used within a TotalScore.Provider");
  }
  return context;
};

const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  return (
    <TotalScore.Provider value={{ totalScore, setTotalScore }}>
      <Router />
    </TotalScore.Provider>
  );
};

export default App;

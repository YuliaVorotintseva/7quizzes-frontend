import React, { useState } from "react";
import Router from "./Router";

import { TotalScore } from "../utils/useTotalScore";

const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  return (
    <TotalScore.Provider value={{ totalScore, setTotalScore }}>
      <Router />
    </TotalScore.Provider>
  );
};

export default App;

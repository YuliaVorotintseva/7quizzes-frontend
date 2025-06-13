import { createContext, useContext } from "react";

import ITotalScore from "../interfaces/ITotalScore";

export const TotalScore = createContext<ITotalScore | null>(null);

export const useTotalScore = () => {
  const context = useContext(TotalScore);
  if (!context) {
    throw new Error("useTotalScore must be used within a TotalScore.Provider");
  }
  return context;
};

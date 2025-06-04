import React from "react";
import { Route, Routes } from "react-router-dom";

import Game from "./pages/Game/Game";
import GameStart from "./pages/GameStart/GameStart";
import GameEnd from "./pages/GameEnd.tsx/GameEnd";

const Router = () => (
  <Routes>
    <Route path="/" element={<GameStart />} />
    <Route path="/game" element={<Game />} />
    <Route path="/finish" element={<GameEnd />} />
  </Routes>
);

export default Router;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Game from "../pages/Game/Game";
import GameStart from "../pages/GameStart/GameStart";
import GameEnd from "../pages/GameEnd.tsx/GameEnd";
import MainLayout from "../layouts/MainLayout/MainLayout";
import SignInPage from "../pages/SignInPage/SignInPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<SignInPage />} />
        <Route path="start" element={<GameStart />} />
        <Route path="game" element={<Game />} />
        <Route path="finish" element={<GameEnd />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;

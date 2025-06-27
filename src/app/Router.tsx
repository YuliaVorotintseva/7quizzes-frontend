import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Game from "../pages/Game/Game";
import GameStart from "../pages/GameStart/GameStart";
import GameEnd from "../pages/GameEnd.tsx/GameEnd";
import MainLayout from "../layouts/MainLayout/MainLayout";
import SignInPage from "../pages/SignInPage/SignInPage";
import CreateRoomPage from "../pages/CreateRoom/CreateRoomPage";
import ChooseRoomPage from "../pages/ChooseRoomPage/ChooseRoomPage";
import { useSelector } from "react-redux";
import { RootState } from "./storeTypes";

const Router = () => {
  const { isAuthorized } = useSelector((state: RootState) => state.userReducer);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              isAuthorized ? <Navigate to="/choose" replace /> : <SignInPage />
            }
          />
          <Route path="/choose" element={<ChooseRoomPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/start" element={<GameStart />} />
          <Route path="/game" element={<Game />} />
          <Route path="/finish" element={<GameEnd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

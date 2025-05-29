import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Game from "./pages/Game/Game";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
);

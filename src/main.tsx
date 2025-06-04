import React from "react";
import { createRoot } from "react-dom/client";

import Game from "./pages/Game/Game";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
);

import React, { ReactNode } from "react";

import "./gameLayout.css";
import Header from "../../components/Header/Header";

interface GameLayoutProps {
  children: ReactNode;
}

const GameLayout = ({ children }: GameLayoutProps) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
    </>
  );
};

export default GameLayout;

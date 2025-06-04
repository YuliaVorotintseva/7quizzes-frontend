import React, { ReactNode } from "react";

import "./gameLayout.css";
import Header from "../../components/Header/Header";

interface GameLayoutProps {
  children: ReactNode;
  className?: string;
}

const GameLayout = ({ children, className }: GameLayoutProps) => {
  return (
    <>
      <Header />
      <main className={className ? `main ${className}` : "main"}>
        {children}
      </main>
    </>
  );
};

export default GameLayout;

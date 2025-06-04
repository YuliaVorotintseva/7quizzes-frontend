import React, { ReactNode } from "react";

import "./gameLayout.css";

interface GameLayoutProps {
  children: ReactNode;
  className?: string;
}

const GameLayout = ({ children, className }: GameLayoutProps) => {
  return (
    <>
      <main className={className ? `main ${className}` : "main"}>
        {children}
      </main>
    </>
  );
};

export default GameLayout;

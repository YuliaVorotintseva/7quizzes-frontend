import React, { ReactNode } from "react";

import "./roomLayout.css";

export type RoomLayoutProps = {
  children: ReactNode;
  className: string;
};

const RoomLayout = ({ children, className }: RoomLayoutProps) => (
  <main className={`room__layout ${className}`}>{children}</main>
);

export default RoomLayout;

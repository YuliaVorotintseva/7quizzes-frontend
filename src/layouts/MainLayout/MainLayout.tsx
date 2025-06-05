import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default MainLayout;

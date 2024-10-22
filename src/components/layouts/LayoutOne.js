import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const LayoutOne = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutOne;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import "../css/form.css";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

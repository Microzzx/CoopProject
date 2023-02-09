import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar_auth";
import Footer from "./footer";

const NavFoot = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default NavFoot;
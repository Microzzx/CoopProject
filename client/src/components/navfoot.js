import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar_route";
import Footer from "./footer";

export default function NavFoot() {
  

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer />
    </div>
  );
}

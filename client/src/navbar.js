import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import blankpic from "./image/blank.png";

function Navbar() {

  return (
    <nav className="autohide navbar navbar-expand-lg navbar-light bg-light shadow w-100 p-3">
    <h2>Example</h2>
    <div className="collapse navbar-collapse me-3" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
      <a className="nav-item nav-link" href="/home">หน้าหลัก</a>
      <a className="nav-item nav-link" href="/form">ฟอร์ม</a>
      <a className="nav-item nav-link" href="/form2">ฟอร์ม2</a>
      <a className="nav-item nav-link" href="/datapage">Data</a>
      </div>
    </div>
    <a href="/login">
      <button className="btn btn-light"><img src={localStorage.getItem("profilePic") ? localStorage.getItem("profilePic") : blankpic} className ="rounded-circle" width="50" height="50"/></button>
    </a>
      
    
  </nav>
  );
}

export default Navbar;

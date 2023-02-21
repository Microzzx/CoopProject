import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";
import status_image from "../../image/guest.png";
import img1 from "../../image/cpall.png";

function Navbar_guest() {
  const [currentURL, setCurrentURL] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentURL(window.location.pathname);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <a href="/home" className="navbar-brand">
          <img src={img1} weight="44" height="41" alt="Logo" />
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav nav-pills">
            <NavLink to="/home" className="nav-item nav-link me-2">
              หน้าแรก
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link me-2 disabled">
              เกี่ยวกับเรา
            </NavLink>
            <NavLink to="/contact" className="nav-item nav-link me-2 disabled">
              ติดต่อ
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto">
            <NavLink to="/login" className="nav-item nav-link me-2">
              เข้าสู่ระบบ
            </NavLink>
            <NavLink to="/register" className="nav-item nav-link me-2">
              ลงทะเบียน
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar_guest;

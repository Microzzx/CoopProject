import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";
import status_image from "../../image/admin.png";
import img1 from "../../image/cpall.png";

function Navbar_admin(props) {
  const [currentURL, setCurrentURL] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentURL(window.location.pathname);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location = "/home";
  }

  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light shadow">
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
            <NavLink to="/document" className="nav-item nav-link me-2">
              เอกสาร
            </NavLink>
            <NavLink to="/formA1" className="nav-item nav-link me-2">
              ฟอร์มA1
            </NavLink>
            <NavLink to="/formA2" className="nav-item nav-link me-2">
              ฟอร์มA2
            </NavLink>
            <NavLink to="/tableA1" className="nav-item nav-link me-2">
              ตารางA1
            </NavLink>
            <NavLink to="/tableA2" className="nav-item nav-link me-2">
              ตารางA2
            </NavLink>
            <NavLink to="/tableUsers" className="nav-item nav-link me-2">
              ตารางUsers
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link me-2 disabled">
              เกี่ยวกับเรา
            </NavLink>
            <NavLink to="/contact" className="nav-item nav-link me-2 disabled">
              ติดต่อ
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto">
            <span class="navbar-text center me-2">{props.email}</span>
            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <img
                  src={
                    localStorage.getItem("profilePic")
                      ? localStorage.getItem("profilePic")
                      : status_image
                  }
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end text-center">
                <li>
                  <a className="dropdown-item" style={{ fontWeight: "bold" }}>
                    Sign in as Admin
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                </li>
                <button
                  className="dropdown-item logoutbtn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar_admin;

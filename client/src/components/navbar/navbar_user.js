import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";
import status_image from "../../image/user.png";
import img1 from "../../image/cpall.png";

function Navbar_user() {
  const [currentURL, setCurrentURL] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentURL(window.location.pathname);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location = "/home";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <a href="/home" className="navbar-brand">
          <img src={img1} weight="50" height="50" alt="Logo" />
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
              Home
            </NavLink>
            <NavLink to="/document" className="nav-item nav-link me-2">
              Document
            </NavLink>
            <NavLink to="/#" className="nav-item nav-link me-2 disabled">
              About Us
            </NavLink>
            <NavLink to="/#" className="nav-item nav-link me-2 disabled">
              Contact
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto">
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
                  <a className="dropdown-item">Sign in as User</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <button className="logoutbtn" onClick={handleLogout}>
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

export default Navbar_user;

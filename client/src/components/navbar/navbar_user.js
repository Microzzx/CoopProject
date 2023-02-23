import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";
import img1 from "../../image/cpall.png";

function Navbar_user(props) {
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
            <NavLink to="/about" className="nav-item nav-link me-2 disabled">
              เกี่ยวกับเรา
            </NavLink>
            <NavLink to="/contact" className="nav-item nav-link me-2 disabled">
              ติดต่อ
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto">
            <span className="navbar-text center me-2">{props.email}</span>
            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <img
                  className="miniprofilepic__image miniprofilepic"
                  src={props.picture_url}
                  width="40"
                  height="40"
                  alt="Profile Picture"
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end text-center">
                <li>
                  <a className="dropdown-item" style={{ fontWeight: "bold" }}>
                    Sign in as User
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

export default Navbar_user;

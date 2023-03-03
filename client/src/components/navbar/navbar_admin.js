import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";
import img1 from "../../image/cpall.png";

function Navbar_admin(props) {
  const [currentURL, setCurrentURL] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentURL(window.location.pathname);
  }, []);

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    Axios.post(
      "http://localhost:3001/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        alert(response.data.message);
        localStorage.removeItem("token");
        window.location = "/home";
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
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
            <li className="nav-item dropdown">
              <NavLink
                to="/form"
                className="nav-link dropdown-toggle me-2"
                data-bs-toggle="dropdown"
              >
                ฟอร์ม
              </NavLink>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/form/formA1">
                  ฟอร์มA1
                </a>

                <a className="dropdown-item" href="/form/formA2">
                  ฟอร์มA2
                </a>

                <a className="dropdown-item" href="/form/formExtra">
                  ฟอร์มEx
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/data"
                className="nav-link dropdown-toggle me-2"
                data-bs-toggle="dropdown"
              >
                ข้อมูล
              </NavLink>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/data/TableA1">
                  ตาราง A1
                </a>

                <a className="dropdown-item" href="/data/TableA2">
                  ตาราง A2
                </a>

                <a className="dropdown-item" href="/data/tableUsers">
                  ตาราง Users
                </a>
              </div>
            </li>
          </div>

          <div className="ms-auto">
            <span className="navbar-text center me-2">{props.email}</span>
            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle "
                data-bs-toggle="dropdown"
                data-bs-display="static"
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

import React, { useState, useEffect, useContext } from "react";
import status_image from "../../image/guest.png";
import "../../css/navbar.css";

function Navbar_guest() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-color shadow w-100 p-0">
      <h2 className="ms-3">CPALL (Guest)</h2>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-item nav-link" href="/home">
            Home
          </a>
          <a className="nav-item nav-link" href="/home">
            About Us
          </a>
          <a className="nav-item nav-link" href="/home">
            Contact
          </a>
        </div>
        <div className="me-3">
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
              <a className="dropdown-item" href="/login">
                Login
              </a>
              <a className="dropdown-item" href="/register">
                Signup
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar_guest;

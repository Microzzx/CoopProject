import React, { useState, useEffect, useContext } from "react";
import blankpic from "../image/blank.png";
import "../css/navbar.css";
import Axios from "axios";

function Navbar() {

  useEffect(() =>{
    const token = localStorage.getItem('token');
    Axios.post("http://localhost:3001/jwtauth",{},{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          }
  })
    .then((response) => {
        if(response.data.status == 'ok'){                   
            //alert("Authen Success!");
        }
        else{
            alert("Authen Failed!");
            localStorage.removeItem('token');
            window.location = '/login'
        }
    })
    .catch((error) => {
      alert("Authen Failed!");
      localStorage.removeItem('token');
      window.location = '/login'
    });
}, [])

  function handleLogout() {
    localStorage.removeItem("token");
    window.location = "/login";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-color shadow w-100 p-0">
      <h2 className="ms-3">Example</h2>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-item nav-link" href="/home">
            Home
          </a>
          <a className="nav-item nav-link" href="/form">
            FormA1
          </a>
          <a className="nav-item nav-link" href="/testpage">
            testpage
          </a>
          {
            <a className="nav-item nav-link" href="/choose">
              choose
            </a>
          }
          <a className="nav-item nav-link" href="/datapage">
            Data
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
                    : blankpic
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
              <button className="logoutbtn" onClick={handleLogout}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

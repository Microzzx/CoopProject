import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavbarGuest from "./navbar_guest";
import NavbarAdmin from "./navbar_admin";
import NavbarUser from "./navbar_user";

function Navbar() {
  const [userData, setUserData] = useState({
    role: "guest",
    email: "",
    picture_url: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    Axios.post(
      `${process.env.REACT_APP_API}/jwtauth`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.data.status === "ok") {
          setUserData({
            ...userData,
            role: response.data.role,
            email: response.data.email,
            picture_url: response.data.picture_url,
          });
        } else if (
          response.data.status === "error" &&
          response.data.message === "Token has expired"
        ) {
          localStorage.removeItem("token");
          setUserData({ ...userData, role: "guest" });
          alert("Your session has expired. Please log in.");
          window.location = "/login";
        } else {
          localStorage.removeItem("token");
          setUserData({ ...userData, role: "guest" });
        }
      })
      .catch((error) => {
        localStorage.removeItem("token");
        setUserData({ ...userData, role: "guest" });
      });
  }, []);

  if (userData.role === "admin") {
    return (
      <NavbarAdmin email={userData.email} picture_url={userData.picture_url} />
    );
  } else if (userData.role === "user") {
    return (
      <NavbarUser email={userData.email} picture_url={userData.picture_url} />
    );
  } else {
    return <NavbarGuest />;
  }
}

export default Navbar;

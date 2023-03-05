import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Axios from "axios";
const PrivateUserRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userinfo, setUserinfo] = useState([]);
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
        setUserinfo(response.data);
        if (
          response.data.status === "ok" &&
          ["admin", "user"].includes(response.data.role)
        ) {
          setIsAuthenticated(true);
          console.log("Authenticated!");
        } else if (
          response.data.status === "error" &&
          response.data.message === "Token has expired"
        ) {
          window.location.reload();
        } else {
          setIsAuthenticated(false);
          console.log("Not authenticated!");
        }
      })
      .catch((error) => {
        setIsAuthenticated(false);
        console.log("Error: ", error);
      });
  }, []);
  return isAuthenticated ? (
    <Outlet context={userinfo} />
  ) : (
    <Navigate to="/home" />
  );
};

export default PrivateUserRoutes;

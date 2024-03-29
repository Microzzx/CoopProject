import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Axios from "axios";
const PrivateUserRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    Axios.get(`${process.env.REACT_APP_API}/doc_status`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.role === "admin") {
          setIsAuthenticated(true);
          console.log("Authenticated!");
        } else if (
          response.data.status === "ok" &&
          response.data.a1_status === "Approved" &&
          (response.data.a2_status === "Approved" ||
            response.data.a2_status === "Declined_extra")
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
  return isAuthenticated ? <Outlet /> : <Navigate to="/document" />;
};

export default PrivateUserRoutes;

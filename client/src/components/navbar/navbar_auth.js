import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import Navbar_guest from "./navbar_guest";
import Navbar_admin from "./navbar_admin";
import Navbar_user from "./navbar_user";

function Navbar() {
  const [ userRole, setUserRole ] = useState("guest")
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
            setUserRole(response.data.message)
        }
        else if(response.data.status == 'error' && response.data.message == 'Token has expired'){
            localStorage.removeItem('token');
            setUserRole("guest")
            alert("Your session has expired. Please log in.");
            window.location = '/home'
        }
        else{
          localStorage.removeItem('token');
          setUserRole("guest")
        }
    })
    .catch((error) => {
      localStorage.removeItem('token');
      setUserRole("guest")
    });
}, [])

  function handleLogout() {
    localStorage.removeItem("token");
    window.location = "/login";
  }
  
  if (userRole === 'admin') {
    return <Navbar_admin />;
  } 
  else if (userRole === 'user') {
    return <Navbar_user/>;
  }
  else{
    return <Navbar_guest />;
  }
}

export default Navbar;

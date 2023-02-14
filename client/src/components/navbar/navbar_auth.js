import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavbarGuest from "./navbar_guest";
import NavbarAdmin from "./navbar_admin";
import NavbarUser from "./navbar_user";

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
        if(response.data.status === 'ok'){
            setUserRole(response.data.role)
        }
        else if(response.data.status === 'error' && response.data.message === 'Token has expired'){
            localStorage.removeItem('token');
            setUserRole("guest")
            alert("Your session has expired. Please log in.");
            window.location = '/login'
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

  if (userRole === 'admin') {
    return <NavbarAdmin />;
  } 
  else if (userRole === 'user') {
    return <NavbarUser/>;
  }
  else{
    return <NavbarGuest />;
  }
}

export default Navbar;

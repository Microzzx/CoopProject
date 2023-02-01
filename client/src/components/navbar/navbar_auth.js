import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import Navbar_guest from "./navbar_guest";
import Navbar_admin from "./navbar_admin";
import Navbar_user from "./navbar_user";

function Navbar() {
  const [ userRole, setUserRole ] = useState("")
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
            setUserRole(response.data.message)
        }
        else{
            // alert("Authen Failed!");
            localStorage.removeItem('token');
            // window.location = '/login'
            setUserRole("guest")
        }
    })
    .catch((error) => {
      // alert("Authen Failed!");
      localStorage.removeItem('token');
      // window.location = '/login'
      setUserRole("guest")
    });
}, [])

  function handleLogout() {
    localStorage.removeItem("token");
    window.location = "/login";
  }
  
  if (userRole === 'guest') {
    return <Navbar_guest />;
  } 
  else if (userRole === 'admin') {
    return <Navbar_admin />;
  }
  else if (userRole === 'user') {
    return <Navbar_user />;
  }
  else{
    return null;
  }

}

export default Navbar;

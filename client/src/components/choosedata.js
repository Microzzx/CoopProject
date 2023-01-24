//THIS PAGE MADE FOR ADMIN
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Choose() {
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
                alert("Authen Success!");
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

  return (
    <div class="card" style={{width:"18rem"}}>
      <img src="..." class="card-img-top" alt="image" />
      <div class="card-body">
        <h5 class="card-title">1.Form A1</h5>
        <p class="card-text">
          กรุณากรอกเอกสารข้อมูลเบื้องต้น
        </p>
        <a href="/form" class="btn btn-primary">
          Go
        </a>
      </div>
    </div>
  );
}
//
export default Choose;

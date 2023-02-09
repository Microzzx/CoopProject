//THIS PAGE MADE FOR ADMIN
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../css/datapage.css";
import Grid from "@mui/material/Grid";

function TableA2() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const url = window.location.pathname;
    
    useEffect(() => {
      const fetchData = (id) => {
        Axios.get(`http://localhost:3001/a1_get/${id}`).then((response) => {
          setData(response.data);
          setLoading(false);
        });
      };
      fetchData(url.substring(url.lastIndexOf('/') + 1));
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }

  return (
    <Grid container component="main" sx={{ height: "86.5vh" }}>
      <div>
      <h2>View Data</h2>
      <p>Time: {data[0].time}</p>
      <p>Email: {data[0].email}</p>
    </div>
    </Grid>
  );
}
//
export default TableA2;

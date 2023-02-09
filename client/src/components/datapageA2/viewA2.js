import React, { useState, useEffect } from "react";
import Axios from "axios";

const ViewA2 = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const url = window.location.pathname;
  

  useEffect(() => {
    const fetchData = (id) => {
      Axios.get(`http://localhost:3001/companyinfo/${id}`).then((response) => {
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
    <div>
      <h2>View Data</h2>
      <p>Time: {data[0].time}</p>
      <p>Email: {data[0].email}</p>
    </div>
  );
};

export default ViewA2;
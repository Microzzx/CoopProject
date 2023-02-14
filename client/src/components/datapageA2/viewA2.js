import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ViewA2 = () => {
  const [data, setData] = useState([]);
  const url = window.location.pathname;
  useEffect(() => {
    const fetchData = (id) => {
      Axios.get(`http://localhost:3001/a2_get/${id}`).then((response) => {
        setData(response.data);
      });
    };
    fetchData(url.substring(url.lastIndexOf("/") + 1));
  }, [url]);

  const displayPDF = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1>Data from a2</h1>
      
       
          
          <button onClick={() => console.log(data[0].url1)}>PDF 1</button>
          <button onClick={() => displayPDF(data[0].url2)}>PDF 2</button>
          
        
      
    </div>
  );
};

export default ViewA2;

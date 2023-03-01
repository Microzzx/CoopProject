import React, { useEffect } from "react";
import Axios from "axios";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./css/index.css";

function App() {
  const onUnload = () => {
    const token = localStorage.getItem("token");
    Axios.post(
      "http://localhost:3001/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        alert(response.data.message);
        localStorage.removeItem("token");
        window.location = "/home";
      })
      .catch((error) => {
        alert("unsuccessful, error" + error);
      });
  };

  useEffect(() => {
    console.log(localStorage.getItem("number"));
    window.addEventListener("beforeunload", onUnload);
    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  }, [onUnload]);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./css/index.css";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./css/index.css";
import { StateProvider } from './store.js';
function App() {
  return (
    <div className="App">
      <StateProvider> 
        <Router />
      </StateProvider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

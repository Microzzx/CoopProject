import React, { useEffect, useState, useContext, createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Form from "./components/form";
import Layout from "./components/layout";
import Home from "./components/home";
import Form2 from "./components/form2";
import Datapage from "./components/datapage";
//import Login from "./components/login";

import firebase from "./firebase";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/form2" element={<Form2 />} />
          <Route exact path="/datapage" element={<Datapage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Index());

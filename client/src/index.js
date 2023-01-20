import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Form from "./components/form";
import App from "./components/App";
import Home from "./components/home";
import Form2 from "./components/form2";
import Datapage from "./components/datapage";
import Testpage from "./components/testpage";
import Login from "./components/login";
import Choose from "./components/choosedata";
import Register from "./components/register";
function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/testpage" element={<Testpage />} />
          <Route exact path="/datapage" element={<Datapage />} />
          <Route exact path="/choose" element={<Choose />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Index());

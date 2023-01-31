import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/form";
import NavFoot from "./components/navfoot";
import Home from "./components/home";
import Datapage from "./components/datapage";
import Testpage from "./components/testpage";
import Login from "./components/login";
import Choose from "./components/choosedata";
import Register from "./components/register";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NavFoot />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/form" element={<Form />} />
            <Route exact path="/testpage" element={<Testpage />} />
            <Route exact path="/datapage" element={<Datapage />} />
            <Route exact path="/choose" element={<Choose />} />
          </Route>
          <Route index element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}
export default Router;

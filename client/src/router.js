import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateAdminRoutes from "./private_admin_routes";
import PrivateUserRoutes from "./private _user_routes";
import FormA1 from "./components/formA1";
import FormA2 from "./components/formA2";
import NavFoot from "./components/navfoot";
import Home from "./components/home";
import DatapageA1 from "./components/datapageA1";
import DatapageA2 from "./components/datapageA2";
import Login from "./components/login";
import Document from "./components/document";
import Register from "./components/register";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NavFoot />}>
          <Route index element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route element={<PrivateUserRoutes />}>
            <Route exact path="/formA1" element={<FormA1 />} />
            <Route exact path="/formA2" element={<FormA2 />} />
            <Route exact path="/document" element={<Document />} />
            <Route element={<PrivateAdminRoutes />}>
              <Route exact path="/datapageA1" element={<DatapageA1 />} />
              <Route exact path="/datapageA2" element={<DatapageA2 />} />
            </Route>
          </Route>
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

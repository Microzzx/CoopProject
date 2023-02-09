import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateAdminRoutes from "./private_admin_routes";
import PrivateUserRoutes from "./private _user_routes";
import FormA1 from "./components/formA1";
import FormA2 from "./components/formA2";
import NavFoot from "./components/navfoot";
import Home from "./components/home";
import TableA1 from "./components/datapageA1/tableA1";
import ViewA1 from "./components/datapageA1/viewA1";
import TableA2 from "./components/datapageA2/tableA2";
import ViewA2 from "./components/datapageA2/viewA2";
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
              <Route exact path="/tableA1" element={<TableA1 />} />
              <Route exact path="/viewA1/:id" element={<ViewA1 />} />
              <Route exact path="/tableA2" element={<TableA2 />} />
              <Route exact path="/viewA2/:id" element={<ViewA2 />} />
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

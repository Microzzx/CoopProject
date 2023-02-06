import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateAdminRoutes from "./private_admin_routes";
import PrivateUserRoutes from "./private _user_routes";
import FormA1 from "./components/formA1";
import NavFoot from "./components/navfoot";
import Home from "./components/home";
import Datapage from "./components/datapage";
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
            <Route exact path="/document" element={<Document />} />
            <Route element={<PrivateAdminRoutes />}>
              <Route exact path="/datapage" element={<Datapage />} />
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

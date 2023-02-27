import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateAdminRoutes from "./private_routes/private_admin_routes";
import PrivateUserRoutes from "./private_routes/private_user_routes";
import PrivateA1Routes from "./private_routes/private_a1_routes";
import PrivateA2Routes from "./private_routes/private_a2_routes";
import PrivateExtraRoutes from "./private_routes/private_extra_routes";
import FormA1 from "./components/formA1";
import FormA2 from "./components/formA2";
import FormExtra from "./components/formExtra";
import NavFoot from "./components/navfoot";
import Home from "./components/home";
import Profile from "./components/profile";
import Document from "./components/document";
import TableA1 from "./components/data/datapageA1/tableA1";
import ViewA1 from "./components/data/datapageA1/viewA1";
import TableA2 from "./components/data/datapageA2/tableA2";
import ViewA2 from "./components/data/datapageA2/viewA2";
import TableUsers from "./components/data/tableUsers";
import Login from "./components/login";
import Register from "./components/register";
import ErrorPage from "./components/errorpage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NavFoot />}>
          <Route index element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route element={<PrivateUserRoutes />}>
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/document" element={<Document />} />
            <Route element={<PrivateA1Routes />}>
              <Route exact path="/form/formA1" element={<FormA1 />} />
            </Route>
            <Route element={<PrivateA2Routes />}>
              <Route exact path="/form/formA2" element={<FormA2 />} />
            </Route>
            <Route element={<PrivateExtraRoutes />}>
              <Route exact path="/form/formExtra" element={<FormExtra />} />
            </Route>
            <Route element={<PrivateAdminRoutes />}>
              <Route exact path="/data/tableA1" element={<TableA1 />} />
              <Route exact path="/data/viewA1/:id" element={<ViewA1 />} />
              <Route exact path="/data/tableA2" element={<TableA2 />} />
              <Route exact path="/data/viewA2/:id" element={<ViewA2 />} />
              <Route exact path="/data/tableUsers" element={<TableUsers />} />
            </Route>
          </Route>
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

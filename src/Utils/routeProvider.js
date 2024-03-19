import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import Login from "../Components/pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
  },
  {
    path: "/login",
    element: React.createElement(Login),
  },
]);

export default router;

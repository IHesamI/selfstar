import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import Login from "../Components/pages/Login";
import Category from "../Components/pages/category/Category";
import Slides from "../Components/pages/category/slides";
import Contents from "../Components/pages/category/Contents";
import AboutUs from "../Components/pages/AboutUs";
import Members from "../Components/pages/Members";
import Seminars from "../Components/pages/category/Seminars";
import ProtectedPath from "../Components/common/ProtectedPath";
import Dashboard from "../Components/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
  },
  {
    path: "/login",
    element: React.createElement(Login),
  },
  {
    path: "/category",
    element: React.createElement(Category),
    children: [
      {
        path: "slides",
        element: React.createElement(Slides),
      },
      {
        path: "thesis",
        element: React.createElement(Slides),
      },
      {
        path: "articles",
        element: React.createElement(Slides),
      },
      {
        path: "seminar",
        element: React.createElement(Seminars),
      },
    ],
  },
  {
    path: "/about-us",
    element: React.createElement(AboutUs),
  },
  {
    path: "/members",
    element: React.createElement(Members),
  },
  {
    path: "/:id",
    element: React.createElement(Contents),
  },
  {
    path: "/dashboard",
    element: React.createElement(ProtectedPath, {
      children: React.createElement(Dashboard),
    }),
  },
]);

export default router;

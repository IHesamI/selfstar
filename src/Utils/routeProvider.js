import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import Login from "../Components/pages/Login";
import Category from "../Components/pages/category/Category";
import Slides from "../Components/pages/category/slides";
import Contents from "../Components/pages/category/Contents";
import AboutUs from "../Components/pages/AboutUs";

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
        element: React.createElement(Slides),
      },
    ],
  },
  {
    path: "/about-us",
    element: React.createElement(AboutUs),
  },
  {
    path: "/:id",
    element: React.createElement(Contents),
  },
]);

export default router;

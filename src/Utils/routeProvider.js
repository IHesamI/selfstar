import { createBrowserRouter, createHashRouter } from "react-router-dom";
import React from "react";
import Login from "../Components/pages/LoginSingUp";
import Category from "../Components/pages/category/Category";
import Slides from "../Components/pages/category/Slides";
import Contents from "../Components/pages/category/Contents";
import AboutUs from "../Components/pages/AboutUs";
import Members from "../Components/pages/Members";
import Seminars from "../Components/pages/category/Seminars";
import ProtectedPath from "../Components/common/ProtectedPath";
import Dashboard from "../Components/pages/Dashboard";
import ErrorPage from "../Components/pages/ErrorPage";
import Profile from "../Components/pages/Profile";
import Home from "../Components/pages/Home";
import Admin from "../Components/pages/Admin";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: React.createElement(Home),
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
      path: "/members/:id",
      element: React.createElement(Profile),
    },
    {
      path: "/:id",
      element: React.createElement(Contents),
    },
    {
      path: "/dashboard",
      element: React.createElement(ProtectedPath),
      children: [
        {
          path: "",
          element: React.createElement(Dashboard),
        },
      ],
    },
    {
      path: "/admin",
      element: React.createElement(ProtectedPath),
      children: [
        {
          path: "",
          element: React.createElement(Admin),
        },
      ],
    },
    {
      path: "/dashboard",
      element: React.createElement(ProtectedPath),
      children: [
        {
          path: "",
          element: React.createElement(Dashboard),
        },
      ],
    },
    {
      path: "*",
      element: React.createElement(ErrorPage),
    },
  ]
  // {
  //   basename: "/selfstar/",
  // }
);

export default router;

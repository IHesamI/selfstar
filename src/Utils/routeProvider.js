import { createBrowserRouter, createHashRouter } from "react-router-dom";
import React from "react";
import Login from "../Components/pages/LoginSingUp";
import Category from "../Components/pages/category/Category";
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
import CategoryList from "../Components/pages/category/CategoryList";
import ContentsPreview from "../Components/pages/category/ContentsPreview";
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
          element: React.createElement(CategoryList, { urlParam: "slides" }),
        },
        {
          path: "thesis",
          element: React.createElement(CategoryList, { urlParam: "thesis" }),
        },
        {
          path: "articles",
          element: React.createElement(CategoryList, { urlParam: "articles" }),
        },
        {
          path: "seminar",
          element: React.createElement(CategoryList, { urlParam: "seminar" }),
        },
      ],
    },
    {
      path: ":category/:id",
      element: React.createElement(Contents, { urlParam: "seminar" }),
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
    // {
    //   path: "/:id",
    //   element: React.createElement(Contents),
    // },
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

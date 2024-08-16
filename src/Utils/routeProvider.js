import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Login from "../Components/pages/LoginSingUp";
import Category from "../Components/pages/category/Category";
import Contents from "../Components/pages/category/Contents";
import AboutUs from "../Components/pages/AboutUs";
import Members from "../Components/pages/Members";
import ProtectedPath from "../Components/common/ProtectedPath";
import Dashboard from "../Components/pages/Dashboard";
import ErrorPage from "../Components/pages/ErrorPage";
import Profile from "../Components/pages/Profile";
import Home from "../Components/pages/Home";
import Admin from "../Components/pages/Admin";
import CategoryList from "../Components/pages/category/CategoryList";
import BlogPage from "../Components/pages/BlogPage";
import AdminProtection from "../Components/common/AdminProtection";
import AdminLogin from "../Components/common/AdminLogin";
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
          element: React.createElement(CategoryList, { urlParam: "slide" }),
        },
        {
          path: "thesis",
          element: React.createElement(CategoryList, { urlParam: "thesis" }),
        },
        {
          path: "articles",
          element: React.createElement(CategoryList, { urlParam: "article" }),
        },
        {
          path: "seminar",
          element: React.createElement(CategoryList, { urlParam: "seminar" }),
        },
      ],
    },
    {
      path: ":category/:id",
      element: React.createElement(Contents),
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
      element: React.createElement(AdminProtection),
      path: "/admin",
      children: [
        {
          path: "login",
          element: React.createElement(AdminLogin),
        },
        {
          path: "",
          element: React.createElement(Admin),
        },
      ],
    },
    {
      path: "/blog/:id",
      element: React.createElement(BlogPage),
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

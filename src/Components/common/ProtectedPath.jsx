import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedPath({ children }) {
  const user = useSelector((state) => state.user);
  //   if (!user) {
  //     return <Navigate to={"/login"} />;
  //   }
  return <div>{children}</div>;
}

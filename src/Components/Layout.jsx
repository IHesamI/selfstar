import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CopyRight />
    </>
  );
}

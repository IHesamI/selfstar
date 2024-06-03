import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <div className="flex flex-col">
        <Footer />
        <CopyRight />
      </div>
    </>
  );
}

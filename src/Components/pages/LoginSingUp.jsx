import React, { useCallback, useState } from "react";
import "./pages.css";
import { loginTab } from "../../config";
import Login from "./Login";
import SignUp from "./SignUp";
export default function LoginSignUp() {
  const [section, setSection] = useState(loginTab.login);

  const changeTab = useCallback((tab) => {
    setSection(tab);
  }, []);
  
  const renderTab = () => {
    switch (section) {
      case loginTab.login:
        return <Login handleChange={changeTab} />;
      case loginTab.signUp:
        return <SignUp handleChange={changeTab} />;
    }
  };
  return (
    <div className="bg-slate-100 py-10 h-full justify-center items-center">
      <div className="flex justify-center items-center h-full">
        {renderTab()}
      </div>
    </div>
  );
}

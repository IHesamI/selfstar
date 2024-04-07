import React from "react";
import { useLang } from "../../hooks/useLang";
import "./pages.css";
export default function Login() {
  const lang = useLang();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-slate-100 py-10 h-full justify-center items-center">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col m-auto bg-white border-gray-300 border-[1px] p-10 rounded-lg">
          <h3 className="text-center font-bold">{lang("login")}</h3>
          <form
            onSubmit={handleSubmit}
            action="POST"
            className="flex flex-col gap-5"
          >
            <div className="login-form-field">
              <label htmlFor="email">{lang("email")}</label>
              <input className="p-1 text-[0.85rem]" type="email" id="email" />
            </div>
            <div className="login-form-field">
              <label htmlFor="password">{lang("password")}</label>
              <input
                className="p-1 text-[0.85rem]"
                type="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-fit m-auto bg-blue-600 hover:bg-opacity-75 px-5 py-1 text-white rounded-lg"
            >
              {lang("click")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

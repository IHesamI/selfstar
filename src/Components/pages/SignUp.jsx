import React, { useRef } from "react";
import { loginTab } from "../../config";
import { useLang } from "../../hooks/useLang";
import { signUp } from "../../Store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignUp({ handleChange }) {
  const lang = useLang();
  const inputDataRef = useRef({});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const onInput = (key, value) => {
    inputDataRef.current = { ...inputDataRef.current, [key]: value };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({payload:inputDataRef.current,navigate}))
  };

  const handleNewAccount = (e) => {
    e.preventDefault();
    handleChange(loginTab.login);
  };
  return (
    <div className="flex flex-col m-auto bg-white border-gray-300 border-[1px] p-10 rounded-lg">
      <h3 className="text-center font-bold">{lang("signup")}</h3>
      <form
        dir={lang.isRtl ? "rtl" : ""}
        onSubmit={handleSubmit}
        action="POST"
        className="flex flex-col gap-5"
      >
        <div className="login-form-field">
          <label htmlFor="firstName">{lang("firstName")}</label>
          <input className="p-1 text-[0.85rem]" type="text" id="firstName"  onChange={(e)=>onInput('name',e.target.value)}/>
        </div>
        <div className="login-form-field">
          <label htmlFor="lastName">{lang("lastName")}</label>
          <input className="p-1 text-[0.85rem]" type="text" id="lastName" onChange={(e)=>onInput('last_name',e.target.value)}/>
        </div>
        <div className="login-form-field">
          <label htmlFor="email">{lang("email")}</label>
          <input className="p-1 text-[0.85rem]" type="email" id="email" onChange={(e)=>onInput('email',e.target.value)}/>
        </div>
        <div className="login-form-field">
          <label htmlFor="password">{lang("password")}</label>
          <input className="p-1 text-[0.85rem]" type="password" id="password" onChange={(e)=>onInput('password',e.target.value)}/>
        </div>
        <div
          onClick={handleNewAccount}
          className="login-form-field text-[14px] text-sm text-blue-400 cursor-pointer text-center"
        >
          <span>{lang("alreadyHaveAccount")}</span>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-fit m-auto bg-blue-600 hover:bg-opacity-75 px-5 py-1 text-white rounded-lg"
        >
          {lang("click")}
        </button>
      </form>
    </div>
  );
}

import { useLang } from "../../hooks/useLang";
import { loginTab } from "../../config";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Store/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login({ handleChange }) {
  const lang = useLang();
  const formRef=useRef({});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [errroMessage,seterrroMessage]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();

    try{
      dispatch(login({payload:formRef.current,navigate}));
    }catch(e){
      console.error(e)
      seterrroMessage(e.message)
    }

  };

  const handleNewAccount = (e) => {
    e.preventDefault();
    handleChange(loginTab.signUp);
  };
  const onInputHandler=(key,value)=>{
    formRef.current = { ...formRef.current, [key]: value };
  }

  return (
    <div className="flex flex-col m-auto bg-white border-gray-300 border-[1px] p-10 rounded-lg">
      <h3 className="text-center font-bold">{lang("login")}</h3>
      <form
      dir={lang.isRtl ? "rtl" : ""}
        onSubmit={handleSubmit}
        action="POST"
        className="flex flex-col gap-5"
      >
        <div className="login-form-field">
          <label htmlFor="email">{lang("email")}</label>
          <input className="p-1 text-[0.85rem]" type="email" id="email" onChange={(e)=>{onInputHandler('email',e.target.value)}} />
        </div>
        <div className="login-form-field">
          <label htmlFor="password">{lang("password")}</label>
          <input className="p-1 text-[0.85rem]" type="password" id="password" onChange={(e)=>{onInputHandler('password',e.target.value)}} />
        </div>
        <div onClick={handleNewAccount} className="login-form-field text-[14px] text-sm text-blue-400 cursor-pointer text-center">
          <span>{lang('newAccount')}</span>
          {errroMessage && <span>{errroMessage}</span>}
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

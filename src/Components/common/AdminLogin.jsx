import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminlogin } from "../../api/apis";
// import { logginUser } from "../store/profileSlice";

export default function AdminLogin() {
  const fieldRefs = useRef({});
  const navigate = useNavigate();
//   const dispatch = useDispatch();

  const hanldeChange = (key, value) => {
    fieldRefs.current = { ...fieldRefs.current, [key]: value };
  };
  
  const submit = async () => {

    const loginResult = await adminlogin(fieldRefs.current);
    if (loginResult.status == 200) {
      const { jwt } = loginResult.data;
      localStorage.setItem("adminJwt", jwt);
      navigate('/admin')
    }

  };
  return (
    <div
      dir="rtl"
      className="flex items-center justify-center h-screen w-full px-5 sm:px-0 mt-3"
    >
      <div className="flex bg-white rounded-lg justify-center overflow-hidden lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">
            به پنل ادمین خوش آمدین
          </p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              نام کاربری
            </label>
            <input
              onChange={(e) => hanldeChange("userName", e.target.value)}
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                رمز عبور
              </label>
            </div>
            <input
              onChange={(e) => hanldeChange("password", e.target.value)}
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
            />
          </div>
          <div className="mt-8">
            <button
              onClick={submit}
              className="bg-blue-500 text-white font-bold py-2 px-4 w-full rounded hover:opacity-80"
            >
              ورود
            </button>
          </div>
        </div>
        <div className="h-full">
          <img
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

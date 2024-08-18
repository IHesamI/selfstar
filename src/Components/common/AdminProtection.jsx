import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { loginByJwtApi } from "../../api/apis";

export default function AdminProtection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const jwt = localStorage.getItem("adminJwt");
    const loginByJwt = async () => {
      try {
        const result = await loginByJwtApi(jwt);
        if (result.data) {
            setIsLoggedIn(true);
        }
      } catch {
        navigate("/admin/login");
      }
    };
    if (jwt) {
      loginByJwt();
    } else {
      navigate("/admin/login");
    }
  }, []);

  return !isLoggedIn ? (
    <div>loading...</div>
  ) : (
    <>
      <Outlet />
    </>
  );
}

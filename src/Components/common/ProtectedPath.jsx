import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function ProtectedPath() {
  const { profile } = useSelector((state) => state.user);
  if (!profile.profile_id) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
}

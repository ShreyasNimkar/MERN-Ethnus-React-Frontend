import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  if (loggedIn) {
    return <Outlet />;
  } else {
    toast.error("You need to be logged in first.");
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;

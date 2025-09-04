import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(authContext);
  return isLoggedIn ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";

const ProtectedAuthRoute = ({ children }) => {
  const { isLoggedIn } = useContext(authContext);
  return !isLoggedIn ? children : <Navigate to={"/"} />;
};

export default ProtectedAuthRoute;

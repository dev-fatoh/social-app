import { Navigate } from "react-router-dom";

const ProtectedAuthRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("token") != null;
  return !isLoggedIn ? children : <Navigate to={"/"} />;
};

export default ProtectedAuthRoute;

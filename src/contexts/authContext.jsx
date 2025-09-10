import { useEffect } from "react";
import { createContext, useState } from "react";
import { getUserData } from "../services/AuthServices.js";

export const authContext = createContext();
export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") != null,
  );
  const [userData, setUserData] = useState(null);
  async function getUserInfo() {
    const response = await getUserData();
    if (response.message == "success") {
      setUserData(response.user);
    }
  }
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <authContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}
    >
      {children}
    </authContext.Provider>
  );
}

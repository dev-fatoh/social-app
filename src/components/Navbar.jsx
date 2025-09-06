import {
  Navbar as HeroUiNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";
import { base } from "framer-motion/client";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(authContext);
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  }
  return (
    <HeroUiNav
      isBlurred={false}
      isBordered
      maxWidth="2xl"
      className="bg-gray-900 text-white"
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">circle</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>

      <NavbarContent justify="end">
        {isLoggedIn ? (
          <NavbarItem>
            <Button onPress={logOut} color="danger" variant="flat">
              Sign Out
            </Button>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="flex">
              <Button color="default" variant="flat">
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button color="primary" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </HeroUiNav>
  );
}

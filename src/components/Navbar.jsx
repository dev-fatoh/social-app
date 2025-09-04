import {
  Navbar as HeroUiNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("token") != null;
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <HeroUiNav>
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

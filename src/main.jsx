import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";
import AuthContextProvider from "./contexts/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </HeroUIProvider>,
);

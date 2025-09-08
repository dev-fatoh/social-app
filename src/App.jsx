import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import FeedPage from "./pages/FeedPage.jsx";
import PostDetailsPage from "./pages/PostDetailsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute.jsx";
import ProtectedAuthRoute from "./ProtectedRoutes/ProtectedAuthRoute.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryCient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: (
            <ProtectedAuthRoute>
              <LoginPage />
            </ProtectedAuthRoute>
          ),
        },
        {
          path: "register",
          element: (
            <ProtectedAuthRoute>
              <RegisterPage />
            </ProtectedAuthRoute>
          ),
        },
      ],
    },
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <FeedPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "post-details/:id",
          element: (
            <ProtectedRoute>
              <PostDetailsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryCient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;

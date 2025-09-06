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

function App() {
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Home from "./pages/home/home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: authUser ? <Navigate to="/home" /> : <Login />,
    },
    {
      path: "/signup",
      element: authUser ? <Navigate to="/home" /> : <SignUp />,
    },

    {
      path: "/home",
      element: authUser ? <Home /> : <Navigate to="/" />,
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

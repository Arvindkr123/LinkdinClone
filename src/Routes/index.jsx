import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import { Register } from "../Components/RegisterComponent";
import HomeLayout from "../Layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
]);

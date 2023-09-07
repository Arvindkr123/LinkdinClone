import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import { Register } from "../Components/RegisterComponent";
import Home from "../Pages/Home";

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
    element: <Home />,
  },
]);

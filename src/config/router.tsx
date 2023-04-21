import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "Layout";
import Home from "modules/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

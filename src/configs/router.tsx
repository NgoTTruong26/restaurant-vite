import { createBrowserRouter } from "react-router-dom";
import Home from "modules/home";
import BookingLookup from "modules/bookingsLookup";
import Menu from "modules/menu";
import SignIn from "modules/auth/components/sign-in";
import SignUp from "modules/auth/components/sign-up";
import HomeLayout from "Layout/customer";
import LayoutBackToHomePage from "Layout/backToHomePage";
import News from "modules/news";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/bookings-lookup",
        element: <BookingLookup />,
      },
      { path: "/dish-menu", element: <Menu /> },
      { path: "/news", element: <News /> },
    ],
  },
  {
    path: "/auth",
    element: <LayoutBackToHomePage />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

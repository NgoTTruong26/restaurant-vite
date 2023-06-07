import { createBrowserRouter } from "react-router-dom";

import BookingLookup from "modules/bookingsLookup";
import Menu from "modules/menu";
import LayoutBackToHomePage from "Layout/backToHomePage";
import News from "modules/news";
import { lazy } from "react";

const HomeLayout = lazy(() => import("Layout/customer"));
const Home = lazy(() => import("modules/home"));
const SignIn = lazy(() => import("modules/auth/components/sign-in"));
const SignUp = lazy(() => import("modules/auth/components/sign-up"));
const UserProfile = lazy(() => import("modules/user"));

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
        path: "bookings-lookup",
        element: <BookingLookup />,
      },
      { path: "dish-menu", element: <Menu /> },
      { path: "news", element: <News /> },
      {
        path: "user",
        children: [{ path: "profile", element: <UserProfile /> }],
      },
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

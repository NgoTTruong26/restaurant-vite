import { createBrowserRouter } from "react-router-dom";

import BookingLookup from "modules/bookingsLookup";
import Menu from "modules/menu";
import LayoutBackToHomePage from "Layout/backToHomePage";

import { lazy } from "react";
import Post from "modules/news/components/posts/components/Post";
import News from "modules/news";
import Booking from "modules/booking";

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
      {
        path: "booking-table",
        element: <Booking />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <Post />,
      },
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

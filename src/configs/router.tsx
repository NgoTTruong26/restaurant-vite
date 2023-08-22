import { createBrowserRouter } from "react-router-dom";

import BookingLookup from "modules/bookingLookup";
import Menu from "modules/menu";
import LayoutBackToHomePage from "Layout/backToHomePage";

import { lazy } from "react";
import Post from "modules/news/components/posts/components/Post";
import News from "modules/news";
import { ELinkSideBar } from "modules/user/constant";
import AccountInformation from "modules/user/components/accountInformation";
import OrderManagement from "modules/user/components/OrderManagement";
import {
  ELinkAdminManagement,
  ELinkDishesManagement,
  ELinkNavbarForAdmin,
  ELinkSideBarAdminInfor,
  ELinkUserManagement,
} from "Layout/admin/constant";
import AdminList from "modules/admin/components/adminList";

//Layout
const HomeLayout = lazy(() => import("Layout/customer"));
const AdminLayout = lazy(() => import("Layout/admin"));

//Pages customers
const Home = lazy(() => import("modules/home"));
const SignIn = lazy(() => import("modules/auth/components/sign-in"));
const SignUp = lazy(() => import("modules/auth/components/sign-up"));
const UserProfile = lazy(() => import("modules/user"));

//Pages administration
const HomeAdmin = lazy(() => import("modules/admin/components/home"));

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
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <Post />,
      },
      {
        path: "user",
        element: <UserProfile />,
        children: [
          { path: ELinkSideBar.PROFILE, element: <AccountInformation /> },
          { path: ELinkSideBar.NOTIFICATION, element: <div>notification</div> },
          {
            path: ELinkSideBar.ORDER_MANAGEMENT,
            element: <OrderManagement />,
          },
        ],
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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <HomeAdmin />,
        children: [
          {
            path: ELinkSideBarAdminInfor.PROFILE,
            element: <HomeAdmin />,
          },
          {
            path: ELinkSideBarAdminInfor.CHANGE_PASSWORD,
            element: <HomeAdmin />,
          },
          {
            path: ELinkSideBarAdminInfor.SETTINGS,
            element: <HomeAdmin />,
          },
        ],
      },
      {
        path: ELinkNavbarForAdmin.ADMIN_MANAGEMENT,
        children: [
          {
            path: ELinkAdminManagement.ADMIN_LIST,
            element: <AdminList />,
          },
          {
            path: ELinkAdminManagement.ROLES_LIST,
            element: <HomeAdmin />,
          },
          {
            path: ELinkAdminManagement.VAT_MANAGEMENT,
            element: <HomeAdmin />,
          },
        ],
      },
      {
        path: ELinkNavbarForAdmin.USER_MANAGEMENT,
        element: <HomeAdmin />,
        children: [
          {
            path: ELinkUserManagement.USER_LIST,
            element: <HomeAdmin />,
          },
          {
            path: ELinkUserManagement.BOOKING_LIST,
            element: <HomeAdmin />,
          },
        ],
      },
      {
        path: ELinkNavbarForAdmin.DISHES_MANAGEMENT,
        element: <HomeAdmin />,
        children: [
          {
            path: ELinkDishesManagement.DISH_LIST,
            element: <HomeAdmin />,
          },
          {
            path: ELinkDishesManagement.DISHES_CONNECT,
            element: <HomeAdmin />,
          },
        ],
      },
      {
        path: ELinkNavbarForAdmin.NEWS_MANAGEMENT,
        element: <HomeAdmin />,
      },
    ],
  },
]);

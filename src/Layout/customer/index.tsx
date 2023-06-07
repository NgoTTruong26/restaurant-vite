import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";

import { lazy } from "react";

const Header = lazy(() => import("./components/header"));

export default function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

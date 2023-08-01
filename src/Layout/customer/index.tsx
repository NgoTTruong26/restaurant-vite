import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/header";

export default function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

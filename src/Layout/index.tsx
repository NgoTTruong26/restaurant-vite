import Header from "./customer/Header";
import { Outlet } from "react-router-dom";
import Footer from "./customer/Footer";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

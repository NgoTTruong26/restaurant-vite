import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function AdminLayout() {
  return (
    <div className="flex justify-end bg-[#f5f5fa]">
      <Sidebar />
      <div className="relative flex justify-center w-[calc(100%-260px)] transition-all px-8 min-h-screen">
        <div className="max-w-[1800px] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function AdminLayout() {
  return (
    <div className="bg-[#f5f5fa] min-h-screen">
      <Sidebar />
      <div className="flex justify-center w-[calc(100%-260px)] float-right transition-all px-8 min-h-screen">
        <div className="max-w-[1800px] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

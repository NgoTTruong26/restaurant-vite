import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function AdminLayout() {
  return (
    <div>
      <Sidebar />
      <div className="w-[calc(100%-260px)] float-right transition-all">
        <Outlet />
      </div>
    </div>
  );
}

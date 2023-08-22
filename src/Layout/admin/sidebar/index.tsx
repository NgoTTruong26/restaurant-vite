import clsx from "clsx";
import AdminInfor from "./components/AdminInfor";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  const [isSidebarMini, setSidebarMini] = useState<boolean>(false);

  const handleSetSidebarMini = () => {
    return setSidebarMini((prevs) => !prevs);
  };

  return (
    <div
      className={clsx(
        "z-30 h-full bg-[url('https://demos.creative-tim.com//light-bootstrap-dashboard-pro-react/static/media/full-screen-image-3.21a228cd.jpg')] bg-cover bg-center bg-no-repeat",
        "fixed overflow-y-auto overflow-x-hidden",
        { "[&~div]:!w-[calc(100%-80px)]": isSidebarMini }
      )}
    >
      <div
        className={clsx(
          "relative w-[260px] text-[#ffffff] transition-all min-h-full ",
          "before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-[#000] before:w-full before:opacity-30",
          {
            "w-20": isSidebarMini,
            "[&>div>div>div>div]:before:opacity-0": isSidebarMini,
            "hover:!w-[260px] [&:hover>div>div>div>div]:before:opacity-100":
              isSidebarMini,
            "admin-dashboard": isSidebarMini,
          }
        )}
      >
        <div className="relative z-10 max-h-[calc(100% - 80px)] min-h-full pb-20 whitespace-nowrap">
          <h1 className="flex justify-center items-center text-base uppercase text-center py-2 border-b border-[#ffffff4d] mx-5 transition-all">
            <MdSpaceDashboard size={40} />
          </h1>
          <AdminInfor handleSetSidebarMini={handleSetSidebarMini} />
          <Navbar />
        </div>
      </div>
    </div>
  );
}

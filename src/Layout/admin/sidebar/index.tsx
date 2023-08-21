import clsx from "clsx";
import AdminInfor from "./components/AdminInfor";
import Navbar from "./components/Navbar";

export default function Sidebar() {
  return (
    <div
      className={clsx(
        "h-full bg-[url('https://demos.creative-tim.com//light-bootstrap-dashboard-pro-react/static/media/full-screen-image-3.21a228cd.jpg')] bg-cover bg-center bg-no-repeat",
        "fixed overflow-y-auto overflow-x-hidden",
        "[&~div]:!w-[calc(100%-80px)]"
      )}
    >
      <div
        className={clsx(
          "relative w-[260px] text-[#ffffff] transition-all min-h-full ",
          "before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-[#000] before:w-full before:opacity-30",
          {
            "!w-20": true,
            "[&>div>div>div>div]:before:opacity-0": true,
            "hover:!w-[260px] [&:hover>div>div>div>div]:before:opacity-100":
              true,
            "[&>div>div>div>div>div>.title]:translate-x-[-25px] [&>div>div>div>div>div>.title]:opacity-0":
              true,
            "[&:hover>div>div>div>div>div>.title]:translate-x-0 [&:hover>div>div>div>div>div>.title]:opacity-100":
              true,
            "[&>div>div>div>ul>li>a>.title]:translate-x-[-25px] [&>div>div>div>ul>li>a>.title]:opacity-0":
              true,
            "[&:hover>div>div>div>ul>li>a>.title]:translate-x-0 [&:hover>div>div>div>ul>li>a>.title]:opacity-100":
              true,
            "[&>div>div>div>ul>li>.title]:translate-x-[-25px] [&>div>div>div>ul>li>.title]:opacity-0":
              true,
            "[&:hover>div>div>div>ul>li>.title]:translate-x-0 [&:hover>div>div>div>ul>li>.title]:opacity-100":
              true,
          }
        )}
      >
        <div className="relative z-10 max-h-[calc(100% - 80px)] min-h-full pb-20 whitespace-nowrap">
          <h1 className="text-xl uppercase text-center py-2 border-b border-[#ffffff4d] mx-5 transition-all">
            Admin Dashboard
          </h1>
          <AdminInfor />
          <Navbar />
        </div>
      </div>
    </div>
  );
}

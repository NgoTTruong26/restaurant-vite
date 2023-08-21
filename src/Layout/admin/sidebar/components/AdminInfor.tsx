import { sideBarAdminInfor } from "Layout/admin/constant";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "redux/app/store";

export default function AdminInfor() {
  const user = useSelector((state: RootState) => state.setUser.value);

  const location = useLocation();

  return (
    <div className="border-b border-[#ffffff4d] py-3 px-2 overflow-hidden">
      <div className="flex flex-col collapse">
        <input
          type="checkbox"
          name="my-accordion-1"
          className="absolute top-0 [&:checked~.collapse-custom]:max-h-[500px] [&:checked~div:before]:rotate-180"
        />
        <div
          className={clsx(
            " flex justify-between collapse-title text-xl font-medium p-0",
            "before:absolute before:border-4 before:border-b-0 before:border-l-transparent before:border-b-transparent before:border-r-transparent before:border-[#ffffff]",
            "before:top-[48%] before:right-2 before:transition-all before:duration-300"
          )}
        >
          <div className={clsx("relative flex items-center gap-3 pl-2")}>
            <div className="w-12">
              <img
                className="w-full rounded-full"
                src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
                alt="avatar"
              />
            </div>
            <div
              className={clsx(
                "title flex flex-col transition-all duration-300"
              )}
            >
              <span className="font-medium text-base">{`${user?.firstName} ${user?.lastName}`}</span>
            </div>
          </div>
        </div>
        <ul
          className={clsx(
            "collapse-custom transition-all duration-300 max-h-0",
            "[&>li]:mt-1"
          )}
        >
          {sideBarAdminInfor.map((item, idx) => (
            <li
              key={idx}
              className={clsx(
                "flex hover:bg-[#ffffff21] transition-all bg-base-200 rounded-md overflow-hidden min-h-[3.75rem]",
                {
                  "!bg-[#ffffff3b]":
                    `/admin/${item.href}` === location.pathname,
                }
              )}
            >
              <Link
                to={item.href}
                className="flex items-center gap-3 py-3 px-2"
              >
                <span className="flex justify-center w-12">{item.icons}</span>
                <span className="title transition-all duration-300">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-3">
            <input
              id="toggle-sidebar-mini"
              type="checkbox"
              className="toggle toggle-lg toggle-success"
            />
            <label
              htmlFor="toggle-sidebar-mini"
              className="title transition-all duration-300 hover:cursor-pointer"
            >
              Sidebar Mini
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

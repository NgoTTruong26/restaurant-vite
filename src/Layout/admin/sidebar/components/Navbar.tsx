import { navbarForAdmin } from "Layout/admin/constant";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="px-2">
      {navbarForAdmin.map((item, idx) => (
        <div key={idx} className="collapse flex flex-col mt-1">
          {!item.children ? (
            <Link
              to={item.href}
              key={idx}
              className={clsx(
                "collapse-title relative transition-all p-0 bg-base-200 rounded-md overflow-hidden",
                "flex items-center",
                "hover:bg-[#ffffff21] hover:cursor-pointer",
                {
                  "!bg-[#ffffff3b]":
                    location.pathname.split("/")[2] === item.href,
                  "before:absolute before:border-4 before:border-b-0 before:border-l-transparent before:border-b-transparent before:border-r-transparent before:border-[#ffffff]":
                    item.children,
                  "before:top-[48%] before:right-2 before:transition-all before:duration-300":
                    item.children,
                }
              )}
            >
              <div className={clsx("flex gap-3 py-3 px-2")}>
                <span className="flex justify-center w-12 ">{item.icons}</span>
                <span
                  className={clsx(
                    "title translate-x-0 opacity-100 transition-all duration-300"
                  )}
                >
                  {item.title}
                </span>
              </div>
            </Link>
          ) : (
            <>
              <input
                type="checkbox"
                className="absolute [&:checked~.collapse-custom]:max-h-[500px] [&:checked~div:before]:rotate-180"
              />
              <div
                key={idx}
                className={clsx(
                  "collapse-title relative transition-all p-0 bg-base-200 rounded-md overflow-hidden",
                  "flex items-center",
                  "hover:bg-[#ffffff21] hover:cursor-pointer",
                  {
                    "!bg-[#ffffff3b]":
                      location.pathname.split("/")[2] === item.href,
                    "before:absolute before:border-4 before:border-b-0 before:border-l-transparent before:border-b-transparent before:border-r-transparent before:border-[#ffffff]":
                      item.children,
                    "before:top-[48%] before:right-2 before:transition-all before:duration-300":
                      item.children,
                  }
                )}
              >
                <div className={clsx("flex gap-3 py-3 px-2")}>
                  <span className="flex justify-center w-12 ">
                    {item.icons}
                  </span>
                  <span
                    className={clsx(
                      "title translate-x-0 opacity-100 transition-all duration-300"
                    )}
                  >
                    {item.title}
                  </span>
                </div>
              </div>

              <ul
                className={clsx(
                  "collapse-custom transition-all duration-300 max-h-0",
                  "[&>li]:mt-1"
                )}
              >
                {item.children.map((val, idx) => (
                  <li
                    key={idx}
                    className={clsx(
                      "hover:bg-[#ffffff21] transition-all rounded-md",
                      {
                        "!bg-[#ffffff3b]":
                          `/admin/${item.href}/${val.href}` ===
                          location.pathname,
                      }
                    )}
                  >
                    <Link
                      to={`${item.href}/${val.href}`}
                      className="flex py-3 px-3 gap-5"
                    >
                      <span className="uppercase font-medium min-w-[40px] text-center">
                        {val.title
                          .split(" ")
                          .map((val) => val[0])
                          .join("")}
                      </span>
                      <span className="title transition-all duration-300">
                        {val.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

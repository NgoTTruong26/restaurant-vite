import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarItemActive } from "redux/features/setActive/setActiveSlide";
import { RootState } from "redux/app/store";
import { useLocation } from "react-router-dom";
import { navbarIcons } from "Layout/constant";

export default function Header() {
  const [scrollHeader, setScrollHeader] = useState<boolean>(false);

  const navbarItem = useSelector(
    (state: RootState) => state.setNavbarItemActive.value.navbarItemActive
  );
  const dispatch = useDispatch();

  const router = useLocation();

  const isLogin: boolean = true;

  const loginDropdown = [
    { content: "Đăng nhập", href: "/auth/sign-in" },
    { content: "Tìm đơn đặt bàn", href: "/booking-lookup" },
    { content: "Hỗ trợ", href: "/support" },
  ];

  useEffect(() => {
    const nodes = document.querySelector(`#root`)?.childNodes ?? [];

    let listNodes: ChildNode[] = [];

    if (nodes.length > 0) {
      dispatch(setNavbarItemActive("home"));
      listNodes = [...nodes].reduce((prevs: ChildNode[], curr: ChildNode) => {
        if ((curr as HTMLElement).id) {
          return [...prevs, curr];
        }
        return [...prevs];
      }, []);
    }

    const handleScroll = () => {
      if (Math.ceil(window.pageYOffset) <= 10) {
        setScrollHeader(false);
      } else setScrollHeader(true);
      if (nodes.length > 0) {
        for (let idx = 0; idx < listNodes.length; idx++) {
          if (
            (listNodes[idx] as HTMLElement).offsetTop * 0.6 <=
              Math.ceil(window.pageYOffset) &&
            ((listNodes[idx] as HTMLElement).offsetHeight +
              (listNodes[idx] as HTMLElement).offsetTop) *
              0.95 >=
              Math.ceil(window.pageYOffset)
          ) {
            dispatch(setNavbarItemActive((listNodes[idx] as HTMLElement).id));
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname, dispatch]);

  const handleClickIntoView = (id: string) =>
    id &&
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className={clsx(
        "fixed top-0 w-full z-50 bg-[#fff] py-[5px] flex justify-center items-center border-b border-[#eee]",
        {
          "opacity-95": scrollHeader,
        }
      )}
    >
      <div className="max-w-[1200px] w-full flex justify-between py-3 text-[#7f7f90]">
        <div className="flex items-center n mr-[20px]">
          <Link to={"/"} className="font-bold text-[28px] text-[#000000]">
            Restaurant
            <span className="font-bold text-[28px] text-red">.</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex">
            {navbarIcons.map((item, idx) =>
              router.pathname !== "/" ? (
                <Link
                  to={`/#${item.id}`}
                  onClick={() => handleClickIntoView(item.id || "")}
                  key={idx}
                  className={clsx(
                    `relative flex items-center px-[5px] hover:bg-[#ffffff33] hover:rounded-[10px] hover:cursor-pointer mx-[20px]
                before:absolute before:w-full before:left-0 before:bottom-[8%] before:h-[2px] before:transform before:duration-150 before:bg-red
                before:scale-x-0 hover:before:scale-x-100`,
                    {
                      "before:scale-x-100": item.id && item.id === navbarItem,
                      " dropdown dropdown-hover": item.dropdown,
                    }
                  )}
                >
                  <div className="pr-[5px]">{item.icons}</div>
                  <div className="flex">{item.content}</div>
                </Link>
              ) : (
                <div
                  onClick={() => handleClickIntoView(item.id || "")}
                  key={idx}
                  className={clsx(
                    `relative flex items-center px-[5px] hover:bg-[#ffffff33] hover:rounded-[10px] hover:cursor-pointer mx-[20px]
                before:absolute before:w-full before:left-0 before:bottom-[8%] before:h-[2px] before:transform before:duration-300 before:bg-red
                before:scale-x-0 hover:before:scale-x-100`,
                    {
                      "before:scale-x-100": item.id && item.id === navbarItem,
                      " dropdown dropdown-hover": item.dropdown,
                    }
                  )}
                >
                  <div className="pr-[5px]">{item.icons}</div>
                  <div className="flex">{item.content}</div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex items-center">
          {isLogin ? (
            <div className="dropdown dropdown-hover ">
              <label tabIndex={0} className="flex m-1">
                <div className="cursor-pointer w-full">
                  <FaUserCircle size={35} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="bg-[#eee] top-10 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {loginDropdown.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.href}
                      onClick={() => dispatch(setNavbarItemActive(""))}
                      className={clsx(
                        "flex capitalize focus:bg-[#c7c8ca] hover:text-red",
                        {
                          "mt-1": idx > 0,
                          "bg-[#c7c8ca]": item.href === router.pathname,
                        }
                      )}
                    >
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="flex m-1">
                <div className="flex">Xem Thêm</div>
                <div className="pl-[5px]">
                  <IoIosArrowDown size={25} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="bg-[#eee] top-10 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {loginDropdown.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.href}
                      onClick={() => dispatch(setNavbarItemActive(""))}
                      className={clsx(
                        "flex capitalize focus:bg-[#c7c8ca] hover:text-red",
                        {
                          "mt-1": idx > 0,
                          "bg-[#c7c8ca]": item.href === router.pathname,
                        }
                      )}
                    >
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

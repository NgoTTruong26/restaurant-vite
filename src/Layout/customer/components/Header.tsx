import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
import { setNavbarItemActive } from "redux/features/setActive/setActiveSlide";
import { RootState } from "redux/app/store";
import { useLocation } from "react-router-dom";
import { loginDropdown, navbarIcons } from "Layout/constant";
import UserHeader from "./header/components/UserHeader";
import GuestHeader from "./header/components/GuestHeader";

export default function Header() {
  const [scrollHeader, setScrollHeader] = useState<boolean>(false);

  const navbarItem = useSelector(
    (state: RootState) => state.setNavbarItemActive.value.navbarItemActive
  );
  const dispatch = useDispatch();

  const router = useLocation();

  const isLogin: boolean = true;

  useEffect(() => {
    const nodes = document.querySelector(`#main`)?.childNodes ?? [];

    let listNodes: ChildNode[] = [];

    let handleScroll: null | (() => any) = null;

    if (nodes.length > 0) {
      if (navbarItem) {
        document
          .querySelector(`#${navbarItem}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }

      dispatch(setNavbarItemActive("home"));
      listNodes = [...nodes].reduce((prevs: ChildNode[], curr: ChildNode) => {
        if ((curr as HTMLElement).id) {
          return [...prevs, curr];
        }
        return [...prevs];
      }, []);

      handleScroll = () => {
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
    }

    window.addEventListener("scroll", handleScroll ? handleScroll : () => {});

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll ? handleScroll : () => {}
      );
  }, [router.pathname, dispatch]);

  console.log("re-render", navbarItem);

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
            {navbarIcons.map((item, idx) => (
              <Link
                to={`/`}
                onClick={(e) => {
                  if (router.pathname === "/") {
                    e.preventDefault();
                    handleClickIntoView(item.id || "");
                  }

                  dispatch(setNavbarItemActive(item.id ?? ""));
                }}
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
            ))}
          </div>
        </div>
        <div className="flex items-center">
          {isLogin ? (
            <UserHeader
              dispatch={dispatch}
              router={router}
              loginDropdown={loginDropdown}
            />
          ) : (
            <GuestHeader
              dispatch={dispatch}
              router={router}
              loginDropdown={loginDropdown}
            />
          )}
        </div>
      </div>
    </div>
  );
}

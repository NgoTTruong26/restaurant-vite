import { Link } from "react-router-dom";
import { useEffect } from "react";
import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
import { setNavbarItemActive } from "redux/features/setActive/setActiveSlide";
import { RootState } from "redux/app/store";
import { useLocation } from "react-router-dom";
import { loginDropdown, navbarWithIcons } from "Layout/constant";
import UserHeader from "./components/UserHeader";
import GuestHeader from "./components/GuestHeader";
import { NavbarWithIcons } from "Layout/interfaces/navbar";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";

export default function Header() {
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
      };
    }

    window.addEventListener("scroll", handleScroll ? handleScroll : () => {});

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll ? handleScroll : () => {}
      );
  }, [router.pathname, dispatch]);

  const handleClickIntoView = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: NavbarWithIcons
  ) => {
    if (router.pathname === "/") {
      e.preventDefault();
      item.id &&
        document
          .querySelector(`#${item.id}`)
          ?.scrollIntoView({ behavior: "smooth" });
    }

    dispatch(setNavbarItemActive(item.id ?? ""));
  };

  return (
    <div
      className={clsx(
        "fixed top-0 w-full z-50 bg-[#fff] py-[5px] flex justify-center items-center border-b border-[#eee] px-5"
      )}
    >
      <div className="max-w-[1200px] w-full flex justify-between py-3 text-[#7f7f90]">
        <MobileNavbar
          navbarWithIcons={navbarWithIcons}
          navbarItem={navbarItem}
          handleClickIntoView={handleClickIntoView}
        />
        <div className="flex items-center n mr-[20px]">
          <Link to={"/"} className="font-bold text-[28px] text-[#000000]">
            Restaurant
            <span className="font-bold text-[28px] text-red">.</span>
          </Link>
        </div>
        <DesktopNavbar
          navbarWithIcons={navbarWithIcons}
          navbarItem={navbarItem}
          handleClickIntoView={handleClickIntoView}
        />
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

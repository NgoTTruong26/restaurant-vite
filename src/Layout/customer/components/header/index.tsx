import { Link } from "react-router-dom";
import { useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarItemActive } from "redux/features/set-active/setActiveSlice";
import { RootState } from "redux/app/store";
import { useLocation } from "react-router-dom";
import {
  TypeNavBarId,
  loginDropdown,
  navbarWithIcons,
  userDropdown,
} from "Layout/constant";
import UserHeader from "./components/UserHeader";
import GuestHeader from "./components/GuestHeader";
import { NavbarWithIcons } from "Layout/interfaces/navbar";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";

export default function Header() {
  const state = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const router = useLocation();

  const navbarItem = state.setNavbarItemActive.value.navbarItemActive;

  const user = state.setUser.value;

  useEffect(() => {
    const nodes = document.querySelector(`#main`)?.childNodes ?? [];

    let listNodes: ChildNode[] = [];

    let handleScroll = () => {};

    if (nodes.length > 0) {
      if (navbarItem) {
        document
          .querySelector(`#${navbarItem}`)
          ?.scrollIntoView({ behavior: "auto" });
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
            dispatch(
              setNavbarItemActive(
                (listNodes[idx] as HTMLElement).id as TypeNavBarId
              )
            );
            return;
          }
        }
      };
    } else {
      dispatch(setNavbarItemActive(""));
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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

    if (item.id) dispatch(setNavbarItemActive(item.id as TypeNavBarId));
  };

  return (
    <div
      className={clsx(
        "fixed top-0 w-full z-20 bg-[#fff] py-[5px] flex justify-center items-center border-b border-[#eee] px-5"
      )}
    >
      <div className="max-w-[1200px] w-full flex justify-between py-3 text-[#7f7f90]">
        <MobileNavbar
          navbarWithIcons={navbarWithIcons}
          navbarItem={navbarItem}
          handleClickIntoView={handleClickIntoView}
        />
        <div className="flex items-center">
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
          {user?.id ? (
            <UserHeader
              dispatch={dispatch}
              router={router}
              loginDropdown={userDropdown}
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

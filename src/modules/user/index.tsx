import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import { RootState } from "redux/app/store";
import SideBar from "./components/SideBar";
import clsx from "clsx";
import SVGLoading from "components/SVGLoading";

export default function UserProfile() {
  const user = useSelector((state: RootState) => state.setUser.value);

  return !user ? (
    <Navigate to={"/auth/sign-in"} />
  ) : (
    <div className="flex justify-center min-h-screen pt-28 pb-48 bg-[#f5f5fa] px-5">
      <div className="flex flex-col max-w-[1200px] w-full">
        <div className="leading-[4]">
          <Link
            to={"/"}
            className="hover:cursor-pointer hover:text-red hover:border-b"
          >
            Trang chủ
          </Link>
          <span>{" > Thông tin tài khoản"}</span>
        </div>
        {user ? (
          !user?.id ? (
            <div className="flex-1 flex justify-center items-center bg-[#ffffff] shadow-xl rounded-2xl">
              <SVGLoading className="[&>rect]:fill-[#f7462f]" />
            </div>
          ) : (
            <div className="flex gap-5 w-full justify-between">
              <div className={clsx("flex w-[20%]", "max-md:hidden")}>
                <div className="sticky top-24 w-full h-fit">
                  {user?.id && <SideBar user={user} />}
                </div>
              </div>

              <div className="w-[80%] max-md:w-full">
                <Outlet />
              </div>
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

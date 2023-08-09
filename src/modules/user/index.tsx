import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import { RootState } from "redux/app/store";
import useGetProfile from "./hooks/useGetProfile";
import SideBar from "./components/SideBar";
import Profile from "./components/Profile";
import SecurityAndConnectivity from "./components/SecurityAndConnectivity";

export default function UserProfile() {
  const user = useSelector((state: RootState) => state.setUser.value);
  const { error, data } = useGetProfile({ userId: user?.id || "" });

  return !user ? (
    <Navigate to={"/auth/sign-in"} />
  ) : (
    <div className="flex justify-center min-h-screen pt-28 pb-72 bg-[#f5f5fa] px-5">
      <div className="max-w-[1200px] w-full">
        <div className="leading-[4]">
          <Link
            to={"/"}
            className="hover:cursor-pointer hover:text-red hover:border-b"
          >
            Trang chủ
          </Link>
          <span>{" > Thông tin tài khoản"}</span>
        </div>
        <div className="flex gap-5">
          <div className="flex w-[20%]">
            <div className="sticky top-24 w-full h-fit">
              <div className="flex items-center gap-3 mb-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
                  alt="avatar"
                />
                <div className="flex flex-col">
                  <span>Tài Khoản của</span>
                  <span className="font-medium">{`${data?.firstName} ${data?.lastName}`}</span>
                </div>
              </div>
              <SideBar />
            </div>
          </div>
          <div className="flex-1 h-full">
            <div className="text-2xl mb-4">Thông tin tài khoản</div>
            <div className="flex bg-[#ffffff] [&>div]:py-4 h-full shadow-xl rounded-2xl p-5">
              <Profile />
              <div className="my-4 border-l-2 border-l-[#ebebf0]"></div>
              <SecurityAndConnectivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

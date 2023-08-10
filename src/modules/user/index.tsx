import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { RootState } from "redux/app/store";
import SideBar from "./components/SideBar";
import clsx from "clsx";
import React, { useState } from "react";
import { ESideBar } from "./constant";
import AccountInformation from "./components/accountInformation";

interface Components {
  id: keyof typeof ESideBar;
  component: React.ReactNode;
}

export default function UserProfile() {
  const user = useSelector((state: RootState) => state.setUser.value);

  const [utilities, setUtilities] = useState<keyof typeof ESideBar>("PROFILE");

  const components: Components[] = [
    {
      id: "PROFILE",
      component: <AccountInformation />,
    },
  ];

  const handleSetUtilities = (value: keyof typeof ESideBar) => {
    setUtilities(value);
  };

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
          <div className={clsx("flex w-[20%]", "max-md:hidden")}>
            <div className="sticky top-24 w-full h-fit">
              <div className="flex items-center gap-3 mb-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
                  alt="avatar"
                />
                <div className="flex flex-col">
                  <span>Tài Khoản của</span>
                  <span className="font-medium">{`${user?.firstName} ${user?.lastName}`}</span>
                </div>
              </div>
              <SideBar
                utilities={utilities}
                handleSetUtilities={handleSetUtilities}
              />
            </div>
          </div>

          {components.map((val, idx) => (
            <div key={idx} className="flex-1 h-full">
              {utilities === val.id && val.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

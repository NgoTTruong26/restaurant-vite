import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { RootState } from "redux/app/store";
import SideBar from "./components/SideBar";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { ESideBar } from "./constant";
import SVGLoading from "components/SVGLoading";
import AccountInformation from "./components/accountInformation";
import OrderManagement from "./components/OrderManagement";

interface Components {
  id: keyof typeof ESideBar;
  component: React.ReactNode;
}

const components: Components[] = [
  {
    id: "PROFILE",
    component: <AccountInformation />,
  },
  {
    id: "ORDER_MANAGEMENT",
    component: <OrderManagement />,
  },
];

export default function UserProfile() {
  const user = useSelector((state: RootState) => state.setUser.value);

  const [utilities, setUtilities] = useState<keyof typeof ESideBar>("PROFILE");

  const handleSetUtilities = (value: keyof typeof ESideBar) => {
    setUtilities(value);
  };

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
                  {user?.id && (
                    <SideBar
                      utilities={utilities}
                      handleSetUtilities={handleSetUtilities}
                      user={user}
                    />
                  )}
                </div>
              </div>

              <div className="w-[80%] max-md:w-full">
                {components.map(
                  (val, idx) =>
                    utilities === val.id && (
                      <div key={idx} className="w-full h-full">
                        {val.component}
                      </div>
                    )
                )}
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

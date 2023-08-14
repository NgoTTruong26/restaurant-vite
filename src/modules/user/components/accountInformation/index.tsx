import clsx from "clsx";
import Profile from "./components/Profile";
import SecurityAndConnectivity from "./components/SecurityAndConnectivity";
import { useSelector } from "react-redux";
import { RootState } from "redux/app/store";
import useGetUserProfile from "./hooks/useGetUserProfile";
import LoadingProfile from "./components/LoadingProfile";
import LoadingSecurity from "./components/LoadingSecurity";

export default function AccountInformation() {
  const user = useSelector((state: RootState) => state.setUser.value);

  const { data, status } = useGetUserProfile();

  return (
    <>
      <div className="text-2xl mb-4">Thông tin tài khoản</div>
      <div
        className={clsx(
          "flex w-full bg-[#ffffff] [&>div]:py-4 h-full shadow-xl rounded-2xl p-5",
          "max-md:flex-col"
        )}
      >
        {status === "loading" ? (
          <LoadingProfile />
        ) : (
          data && <Profile data={data} />
        )}
        <div
          className={clsx(
            "my-4 border-l-2 border-[#ebebf0]",
            "max-md:border-l-0 max-md:border-t-2"
          )}
        ></div>
        {status === "loading" ? (
          <LoadingSecurity />
        ) : (
          data && <SecurityAndConnectivity data={data} />
        )}
      </div>
    </>
  );
}

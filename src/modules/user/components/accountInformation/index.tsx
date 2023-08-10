import clsx from "clsx";
import Profile from "./components/Profile";
import SecurityAndConnectivity from "./components/SecurityAndConnectivity";
import useGetProfile from "modules/user/hooks/useGetProfile";
import { useSelector } from "react-redux";
import { RootState } from "redux/app/store";

export default function AccountInformation() {
  const user = useSelector((state: RootState) => state.setUser.value);

  const { error, data } = useGetProfile({ userId: user?.id || "" });

  return (
    <>
      <div className="text-2xl mb-4">Thông tin tài khoản</div>
      <div
        className={clsx(
          "flex bg-[#ffffff] [&>div]:py-4 h-full shadow-xl rounded-2xl p-5",
          "max-md:flex-col"
        )}
      >
        {data && <Profile data={data} />}
        <div
          className={clsx(
            "my-4 border-l-2 border-[#ebebf0]",
            "max-md:border-l-0 max-md:border-t-2"
          )}
        ></div>
        {data && <SecurityAndConnectivity data={data} />}
      </div>
    </>
  );
}

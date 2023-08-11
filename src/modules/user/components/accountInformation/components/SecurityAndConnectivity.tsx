import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import clsx from "clsx";
import { connectSociety } from "modules/user/constant";
import ChangePassword from "./ChangePassword";
import { useState } from "react";
import { GetUserProfileDTO } from "../dto/get-user.dto";

interface Props {
  data: GetUserProfileDTO;
}

export default function SecurityAndConnectivity({ data }: Props) {
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);

  const handleCloseShowChangePassword = () => {
    setShowChangePassword(false);
  };

  return (
    <div className="pr-4 pl-6 flex-1">
      <div>
        <div className="text-lg pb-5">Số điện thoại và Email</div>
        <div className="[&>div]:py-4">
          <div
            className={clsx(
              "flex justify-between items-center",
              "max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4"
            )}
          >
            <div className="flex gap-5">
              <BsTelephone size={25} />
              <div className="flex flex-col">
                <span>Số điện thoại</span>
                <span>{data.phone || "Chưa kết nối"}</span>
              </div>
            </div>
            <button className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]">
              {data.phone ? "Cập nhật" : "Thiết lập"}
            </button>
          </div>
          <div
            className={clsx(
              "flex justify-between items-center",
              "max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4"
            )}
          >
            <div className="flex gap-5">
              <AiOutlineMail size={25} />
              <div className="flex flex-col">
                <span>Địa chỉ email</span>
                <span>{data.email || "Chưa kết nối"}</span>
              </div>
            </div>
            <button className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]">
              {data.phone ? "Cập nhật" : "Thiết lập"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-lg">Bảo mật</div>
        <div className="[&>div]:py-4">
          <div
            className={clsx(
              "flex justify-between items-center",
              "max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4"
            )}
          >
            <div className="flex items-center gap-5">
              <AiFillLock size={25} />
              <span>Đổi mật khẩu</span>
            </div>
            <button
              onClick={() => setShowChangePassword(true)}
              className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]"
            >
              Cập nhật
            </button>
          </div>
        </div>
        {showChangePassword && (
          <ChangePassword
            handleCloseShowChangePassword={handleCloseShowChangePassword}
          />
        )}
      </div>
      <div>
        <div className="text-lg">Liên kết mạng xã hội</div>
        <div className="[&>div]:py-4">
          {connectSociety.map((val, idx) => (
            <div
              key={idx}
              className={clsx(
                "flex justify-between items-center",
                "max-xs:flex-col max-xs:items-start max-xs:[&>button]:mt-4"
              )}
            >
              <div key={idx} className="flex items-center gap-5">
                {val.icons}
                <span>{val.title}</span>
              </div>
              <button
                disabled={idx === 1}
                className={clsx(
                  "btn min-h-0 h-10 min-w-[110px] border-solid btn-outline btn-info hover:!text-[#ffffff]",
                  {
                    "btn-disabled": idx === 1,
                  }
                )}
              >
                {idx === 1 ? "Đã kết nối" : "Kết nối"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

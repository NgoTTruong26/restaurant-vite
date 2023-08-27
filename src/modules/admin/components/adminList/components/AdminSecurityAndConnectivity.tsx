import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import clsx from "clsx";
import { useState } from "react";
import { GetAdminDTO } from "../dto/get-admins.dto";
import ChangePasswordAdmin from "./ChangePasswordAdmin";

interface Props {
  data: GetAdminDTO;
}

export default function AdminSecurityAndConnectivity({ data }: Props) {
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false);

  const handleCloseShowChangePassword = () => {
    setShowChangePassword(false);
  };

  return (
    <div className="w-[50%] pr-4 pl-6 max-md:w-full">
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
          <ChangePasswordAdmin
            handleCloseShowChangePassword={handleCloseShowChangePassword}
            data={data}
          />
        )}
      </div>
    </div>
  );
}

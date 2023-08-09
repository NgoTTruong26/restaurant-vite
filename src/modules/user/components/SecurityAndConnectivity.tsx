import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiShieldCheck } from "react-icons/hi";
import { connectSociety } from "../constant";
import clsx from "clsx";

interface Props {
  phoneNumber?: string;
  email?: string;
  pin?: string;
}

export default function SecurityAndConnectivity({
  phoneNumber,
  email,
  pin,
}: Props) {
  return (
    <div className="pr-4 pl-6 flex-1">
      <div>
        <div className="text-lg pb-5">Số điện thoại và Email</div>
        <div className="[&>div]:py-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <BsTelephone size={25} />
              <div className="flex flex-col">
                <span>Số điện thoại</span>
                <span>{phoneNumber || "Chưa kết nối"}</span>
              </div>
            </div>
            <button className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]">
              {phoneNumber ? "Cập nhật" : "Thiết lập"}
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              <AiOutlineMail size={25} />
              <div className="flex flex-col">
                <span>Địa chỉ email</span>
                <span>{email || "Chưa kết nối"}</span>
              </div>
            </div>
            <button className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]">
              {phoneNumber ? "Cập nhật" : "Thiết lập"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-lg">Bảo mật</div>
        <div className="[&>div]:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <AiFillLock size={25} />
              <span>Đổi mật khẩu</span>
            </div>
            <button className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]">
              {"Cập nhật"}
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <HiShieldCheck size={25} />
              <span>{pin ? "Đổi mã PIN" : "Thiết lập mã PIN"}</span>
            </div>
            <button className="btn min-h-0 h-10 min-w-[110px]  border-solid btn-outline btn-info hover:!text-[#ffffff]">
              {pin ? "Cập nhật" : "Thiết lập"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-lg">Liên kết mạng xã hội</div>
        <div className="[&>div]:py-4">
          {connectSociety.map((val, idx) => (
            <div className="flex justify-between items-center">
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

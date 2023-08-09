import { ReactNode } from "react";
import { BiLockAlt, BiSolidUser } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IoMdNotifications } from "react-icons/io";
import { RiBookReadFill } from "react-icons/ri";

const enum ESideBar {
  PROFILE = "Thông tin tài khoản",
  NOTIFICATION = "Thông báo của tôi",
  ORDER_MANAGEMENT = "Quản lý đơn hàng",
}

const enum EConnectSociety {
  FACEBOOK = "Facebook",
  GOOGLE = "Google",
}

const enum EGender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

interface SideBar {
  icons: ReactNode;
  title: string;
  href: string;
}

interface IconWithTitle {
  icons: ReactNode;
  title: string;
}

interface Gender {
  value: string;
  title: string;
}

export const sideBar: SideBar[] = [
  {
    icons: <BiSolidUser size={25} />,
    title: ESideBar.PROFILE,
    href: "",
  },
  {
    icons: <IoMdNotifications size={25} />,
    title: ESideBar.NOTIFICATION,
    href: "notification",
  },
  {
    icons: <RiBookReadFill size={25} />,
    title: ESideBar.ORDER_MANAGEMENT,
    href: "order-management",
  },
];

export const connectSociety: IconWithTitle[] = [
  {
    icons: <BsFacebook className="text-[#1877f2]" size={25} />,
    title: EConnectSociety.FACEBOOK,
  },
  {
    icons: <FcGoogle size={25} />,
    title: EConnectSociety.GOOGLE,
  },
];

export const gender: Gender[] = [
  {
    title: "Nam",
    value: EGender.MALE,
  },
  {
    title: "Nữ",
    value: EGender.FEMALE,
  },
  {
    title: "Khác",
    value: EGender.OTHER,
  },
];

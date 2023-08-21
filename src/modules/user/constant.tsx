import { ReactNode } from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IoMdNotifications } from "react-icons/io";
import { RiBookReadFill } from "react-icons/ri";

export const enum ESideBar {
  PROFILE = "Thông tin tài khoản",
  NOTIFICATION = "Thông báo của tôi",
  ORDER_MANAGEMENT = "Quản lý đơn hàng",
}

export const enum ELinkSideBar {
  PROFILE = "profile",
  NOTIFICATION = "notification",
  ORDER_MANAGEMENT = "order-management",
}

const enum EConnectSociety {
  FACEBOOK = "Facebook",
  GOOGLE = "Google",
}

export const enum EGender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

interface SideBar {
  icons: ReactNode;
  title: ESideBar;
  href: ELinkSideBar;
}

interface IconWithTitle<T> {
  icons: ReactNode;
  title: T;
}

interface Gender {
  value: string;
  title: string;
}

export const sideBar: SideBar[] = [
  {
    icons: <BiSolidUser size={25} />,
    title: ESideBar.PROFILE,
    href: ELinkSideBar.PROFILE,
  },
  {
    icons: <IoMdNotifications size={25} />,
    title: ESideBar.NOTIFICATION,
    href: ELinkSideBar.NOTIFICATION,
  },
  {
    icons: <RiBookReadFill size={25} />,
    title: ESideBar.ORDER_MANAGEMENT,
    href: ELinkSideBar.ORDER_MANAGEMENT,
  },
];

export const connectSociety: IconWithTitle<EConnectSociety>[] = [
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

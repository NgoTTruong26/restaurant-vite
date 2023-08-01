import { Contact } from "interfaces/contact";
import { ImHome } from "react-icons/im";
import { BiFoodMenu, BiMap, BiNews, BiTimeFive } from "react-icons/bi";
import { BsFacebook, BsTelephone } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineSchedule,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { ReactNode } from "react";
import clsx from "clsx";
import { LoginDropdown } from "./interfaces/loginDropdown";
import { NavbarWithIcons } from "./interfaces/navbar";
import { type } from "os";

const enum ENavBar {
  HOME = "Trang Chủ",
  OUR_MENU = "Menu & Giá",
  NEWS = "Tin Tức",
  BOOKINGS = "Đặt Bàn",
  ADDRESS = "Địa Chỉ",
  PHONE_NUMBER = "Gọi Đặt Bàn",
  EVENT = "Sự kiện",
}

export const enum NavBarId {
  HOME = "home",
  OUR_MENU = "our_menu",
  NEWS = "news",
  BOOKINGS = "bookings",
  ADDRESS = "address",
  EVENTS = "events",
}

export type TypeNavBarId =
  | "home"
  | "our_menu"
  | "news"
  | "bookings"
  | "address"
  | "events";

export const navbarWithIcons: NavbarWithIcons[] = [
  {
    content: ENavBar.HOME,
    icons: <ImHome size={20} />,
    id: NavBarId.HOME,
  },
  {
    content: ENavBar.OUR_MENU,
    icons: <BiFoodMenu size={22} />,
    id: NavBarId.OUR_MENU,
  },
  {
    content: ENavBar.EVENT,
    icons: <GiPartyPopper size={22} />,
    id: NavBarId.EVENTS,
  },

  {
    content: ENavBar.BOOKINGS,
    icons: <AiOutlineSchedule size={25} />,
    id: NavBarId.BOOKINGS,
  },

  {
    content: ENavBar.NEWS,
    icons: <BiNews size={22} />,
    id: NavBarId.NEWS,
  },

  {
    content: ENavBar.ADDRESS,
    icons: <IoLocationOutline size={25} />,
    id: NavBarId.ADDRESS,
  },

  {
    content: ENavBar.PHONE_NUMBER,
    icons: <BsTelephone size={20} />,
  },
];

const icons: ReactNode[] = [
  <AiOutlineTwitter size={25} />,
  <BsFacebook size={25} />,
  <AiOutlineInstagram size={25} />,
  <AiFillLinkedin size={25} />,
];

enum EContact {
  ADDRESS = "Địa chỉ",
  RESERVATIONS = "Đặt bàn",
  SCHEDULE = "Giờ mở cửa",
  FOLLOW_US = "Theo dõi chúng tôi",
}

export const contacts: Contact<string | ReactNode>[] = [
  {
    icons: <BiMap size={35} />,
    title: EContact.ADDRESS,
    content: "A108 Adam Street\nNew York, NY 535022 - US",
  },
  {
    icons: <BsTelephone size={35} />,
    title: EContact.RESERVATIONS,
    content: (
      <>
        <div>
          <span className="font-medium">Phone:</span>
          <span>{" +1 5589 55488 55"}</span>
        </div>
        <div>
          <span className="font-medium">Email:</span>
          <span>{" info@example.com"}</span>
        </div>
      </>
    ),
  },
  {
    icons: <BiTimeFive size={35} />,
    title: EContact.SCHEDULE,
    content: (
      <>
        <div>
          <span className="font-medium">Mon-Sat:</span>
          <span>{" 11AM - 23PM"}</span>
        </div>
        <div>
          <span className="font-medium">Sunday:</span>
          <span>{" Closed"}</span>
        </div>
      </>
    ),
  },
  {
    title: EContact.FOLLOW_US,
    content: (
      <div className="flex flex-wrap">
        {icons.map((item, idx) => (
          <span
            key={idx}
            className={clsx(
              "flex flex-wrap",
              "max-md:w-[50%] max-md:pl-0",
              "max-sm:w-fit max-sm:pt-0",
              {
                "pl-2": idx > 0,
                "max-md:pt-2": idx > 1,
                "max-sm:pl-2": idx > 0,
              }
            )}
          >
            <div
              className={clsx(
                "p-2 border border-[#ffffff33] !text-[#ffffffb3] rounded-full hover:border-[#eee] hover:!text-[#eee] hover:cursor-pointer"
              )}
            >
              {item}
            </div>
          </span>
        ))}
      </div>
    ),
  },
];

const enum ELoginDropdown {
  SIGNIN = "Đăng Nhập",
  SIGNUP = "Đăng Kí",
  BOOKINGSLOOKUP = "Tìm Đơn Đặt Bàn",
  SUPPORT = "Hỗ Trợ",
}

const enum EUserDropdown {
  BOOKINGSLOOKUP = "Tìm Đơn Đặt Bàn",
  SUPPORT = "Hỗ Trợ",
}

export const loginDropdown: LoginDropdown[] = [
  { content: ELoginDropdown.SIGNIN, href: "/auth/sign-in" },
  { content: ELoginDropdown.SIGNUP, href: "/auth/sign-up" },
  { content: ELoginDropdown.BOOKINGSLOOKUP, href: "/bookings-lookup" },
  { content: ELoginDropdown.SUPPORT, href: "/support" },
];

export const userDropdown: LoginDropdown[] = [
  { content: EUserDropdown.BOOKINGSLOOKUP, href: "/bookings-lookup" },
  { content: EUserDropdown.SUPPORT, href: "/support" },
];

import { ReactNode } from "react";
import { AiFillLock, AiOutlineSetting } from "react-icons/ai";
import { BiSolidUser, BiUser } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineRestaurantMenu,
} from "react-icons/md";

export const enum ESideBarAdminInfor {
  PROFILE = "My Profile",
  CHANGE_PASSWORD = "Change Password",
  SETTINGS = "Settings",
}

export const enum ELinkSideBarAdminInfor {
  PROFILE = "profile",
  CHANGE_PASSWORD = "change-password",
  SETTINGS = "settings",
}

interface SideBarAdminInfor {
  icons: ReactNode;
  title: ESideBarAdminInfor;
  href: ELinkSideBarAdminInfor;
}

export const sideBarAdminInfor: SideBarAdminInfor[] = [
  {
    icons: <BiSolidUser size={25} />,
    title: ESideBarAdminInfor.PROFILE,
    href: ELinkSideBarAdminInfor.PROFILE,
  },
  {
    icons: <AiFillLock size={25} />,
    title: ESideBarAdminInfor.CHANGE_PASSWORD,
    href: ELinkSideBarAdminInfor.CHANGE_PASSWORD,
  },
  {
    icons: <AiOutlineSetting size={25} />,
    title: ESideBarAdminInfor.SETTINGS,
    href: ELinkSideBarAdminInfor.SETTINGS,
  },
];

export const enum ENavbarForAdmin {
  ADMIN_MANAGEMENT = "Admin Management",
  USER_MANAGEMENT = "User Management",
  DISHES_MANAGEMENT = "Dishes Management",
  NEWS_MANAGEMENT = "News Management",
}

export const enum ELinkNavbarForAdmin {
  ADMIN_MANAGEMENT = "admin-management",
  USER_MANAGEMENT = "user-management",
  DISHES_MANAGEMENT = "dishes-management",
  NEWS_MANAGEMENT = "news-management",
}

export const enum EChildrenAdminManagement {
  ADMIN_MANAGEMENT = "Admin Management",
  USER_MANAGEMENT = "User Management",
  BOOKINGS_MANAGEMENT = "Bookings Management",
  DISHES_MANAGEMENT = "Dishes Management",
  NEWS_MANAGEMENT = "News Management",
}

export const enum EAdminManagement {
  ADMIN_LIST = "Admin List", // CRUD
  ROLES_LIST = "Role List",
  VAT_MANAGEMENT = "VAT Management",
}

export const enum ELinkAdminManagement {
  ADMIN_LIST = "admin-list",
  ROLES_LIST = "role-list",
  VAT_MANAGEMENT = "vat-management",
}

export const enum EUserManagement {
  USER_LIST = "User List", // CRUD
  BOOKING_LIST = "Booking List", // CRU, update booking status
}

export const enum ELinkUserManagement {
  USER_LIST = "user-list",
  BOOKING_LIST = "booking-list",
}

export const enum EDishesManagement {
  DISH_LIST = "Dish List", // CRUD, (option fillter buffet, set)
  DISHES_CONNECT = "Dish Connect", // Kết nối món ăn -> set món ăn, set món ăn -> buffet (auto thêm “được sửa đổi bởi admin nào”)
}

export const enum ELinkDishesManagement {
  DISH_LIST = "dish-list",
  DISHES_CONNECT = "dishes-connect",
}

interface NavbarChildrenForAdmin {
  title: string;
  href: string;
}

interface NavbarForAdmin {
  icons: ReactNode;
  title: ENavbarForAdmin;
  href: ELinkNavbarForAdmin;
  children?: NavbarChildrenForAdmin[];
}

export const navbarForAdmin: NavbarForAdmin[] = [
  {
    icons: <MdOutlineAdminPanelSettings size={25} />,
    title: ENavbarForAdmin.ADMIN_MANAGEMENT,
    href: ELinkNavbarForAdmin.ADMIN_MANAGEMENT,
    children: [
      {
        title: EAdminManagement.ADMIN_LIST,
        href: ELinkAdminManagement.ADMIN_LIST,
      },
      {
        title: EAdminManagement.ROLES_LIST,
        href: ELinkAdminManagement.ROLES_LIST,
      },
      {
        title: EAdminManagement.VAT_MANAGEMENT,
        href: ELinkAdminManagement.VAT_MANAGEMENT,
      },
    ],
  },
  {
    icons: <BiUser size={25} />,
    title: ENavbarForAdmin.USER_MANAGEMENT,
    href: ELinkNavbarForAdmin.USER_MANAGEMENT,
    children: [
      {
        title: EUserManagement.USER_LIST,
        href: ELinkUserManagement.USER_LIST,
      },
      {
        title: EUserManagement.BOOKING_LIST,
        href: ELinkUserManagement.BOOKING_LIST,
      },
    ],
  },
  {
    icons: <MdOutlineRestaurantMenu size={25} />,
    title: ENavbarForAdmin.DISHES_MANAGEMENT,
    href: ELinkNavbarForAdmin.DISHES_MANAGEMENT,
    children: [
      {
        title: EDishesManagement.DISH_LIST,
        href: ELinkDishesManagement.DISH_LIST,
      },
      {
        title: EDishesManagement.DISHES_CONNECT,
        href: ELinkDishesManagement.DISHES_CONNECT,
      },
    ],
  },
  {
    icons: <ImNewspaper size={25} />,
    title: ENavbarForAdmin.NEWS_MANAGEMENT,
    href: ELinkNavbarForAdmin.NEWS_MANAGEMENT,
  },
];

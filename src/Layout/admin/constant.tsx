import { ReactNode } from 'react';
import { BiSolidUser, BiUser } from 'react-icons/bi';
import { ImNewspaper } from 'react-icons/im';
import {
  MdOutlineAdminPanelSettings,
  MdOutlineRestaurantMenu,
} from 'react-icons/md';

export enum ENavAdmin {
  ADMIN_MANAGEMENT = '/admin-management',
  USER_MANAGEMENT = '/user-management',
  DISHES_MANAGEMENT = '/dishes-management',
  NEWS_MANAGEMENT = '/news-management',

  //children
  PROFILE = '/profile',
  ADMIN_LIST = '/admin-list',
  ROLES_LIST = '/role-list',
  VAT_MANAGEMENT = '/vat-management',
  DISH_LIST = '/dish-list',
  DISHES_CONNECT = '/dishes-connect',
  USER_LIST = '/user-list',
  BOOKING_LIST = '/booking-list',
}

export enum ENavTitleAdmin {
  ADMIN_MANAGEMENT = 'Admin Management',
  USER_MANAGEMENT = 'User Management',
  BOOKINGS_MANAGEMENT = 'Bookings Management',
  DISHES_MANAGEMENT = 'Dishes Management',
  NEWS_MANAGEMENT = 'News Management',

  //children
  //------------------------------------------------------------
  PROFILE = 'My Profile',

  //ADMIN_MANAGEMENT
  ADMIN_LIST = 'Admin List', // CRUD
  ROLES_LIST = 'Role List',
  VAT_MANAGEMENT = 'VAT Management',

  //USER_MANAGEMENT
  USER_LIST = 'User List', // CRUD
  BOOKING_LIST = 'Booking List', // CRU, update booking status

  //DISHES_MANAGEMENT
  DISH_LIST = 'Dish List', // CRUD, (option fillter buffet, set)
  DISHES_CONNECT = 'Dish Connect', // Kết nối món ăn -> set món ăn, set món ăn -> buffet (auto thêm “được sửa đổi bởi admin nào”)

  //NEWS_MANAGEMENT
}

interface NavbarProfileAdmin {
  href: ENavAdmin;
  children: IChildrenNavAdmin[];
}

interface NavbarAdmin {
  icons: ReactNode;
  title: ENavTitleAdmin;
  href: ENavAdmin;
  children?: IChildrenNavAdmin[];
}

interface IChildrenNavAdmin {
  icons?: ReactNode;
  title: ENavTitleAdmin;
  href: ENavAdmin;
}

export const sideBarAdminInfor: NavbarProfileAdmin = {
  href: ENavAdmin.PROFILE,
  children: [
    {
      icons: <BiSolidUser size={25} />,
      title: ENavTitleAdmin.PROFILE,
      href: ENavAdmin.PROFILE,
    },
  ],
};

export const navbarForAdmin: NavbarAdmin[] = [
  {
    icons: <MdOutlineAdminPanelSettings size={25} />,
    title: ENavTitleAdmin.ADMIN_MANAGEMENT,
    href: ENavAdmin.ADMIN_MANAGEMENT,
    children: [
      {
        title: ENavTitleAdmin.ADMIN_LIST,
        href: ENavAdmin.ADMIN_LIST,
      },
      {
        title: ENavTitleAdmin.ROLES_LIST,
        href: ENavAdmin.ROLES_LIST,
      },
      {
        title: ENavTitleAdmin.VAT_MANAGEMENT,
        href: ENavAdmin.VAT_MANAGEMENT,
      },
    ],
  },
  {
    icons: <BiUser size={25} />,
    title: ENavTitleAdmin.USER_MANAGEMENT,
    href: ENavAdmin.USER_MANAGEMENT,
    children: [
      {
        title: ENavTitleAdmin.USER_LIST,
        href: ENavAdmin.USER_LIST,
      },
      {
        title: ENavTitleAdmin.BOOKING_LIST,
        href: ENavAdmin.BOOKING_LIST,
      },
    ],
  },
  {
    icons: <MdOutlineRestaurantMenu size={25} />,
    title: ENavTitleAdmin.DISHES_MANAGEMENT,
    href: ENavAdmin.DISHES_MANAGEMENT,
    children: [
      {
        title: ENavTitleAdmin.DISH_LIST,
        href: ENavAdmin.DISH_LIST,
      },
      {
        title: ENavTitleAdmin.DISHES_CONNECT,
        href: ENavAdmin.DISHES_CONNECT,
      },
    ],
  },
  {
    icons: <ImNewspaper size={25} />,
    title: ENavTitleAdmin.NEWS_MANAGEMENT,
    href: ENavAdmin.NEWS_MANAGEMENT,
  },
];

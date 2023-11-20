import { ENavAdmin } from 'Layout/admin/constant';
import AppAdmin from 'modules/admin/AppAdmin';
import AdminManagement from 'modules/admin/components/adminList';
import HomeAdmin from 'modules/admin/components/home';
import RoleManagement from 'modules/admin/components/roleList';
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import AdminProfile from './components/home/pages/AdminProfile';

const AdminLayout = lazy(() => import('Layout/admin'));

//Pages admins
const SignInAdmin = lazy(
  () => import('modules/admin/components/auth/components'),
);

export const adminRoute: RouteObject = {
  path: '/admin',
  element: <AppAdmin />,
  children: [
    {
      path: '',
      element: <AdminLayout />,
      children: [
        {
          path: '',
          element: <AdminProfile />,
        },
        {
          path: ENavAdmin.PROFILE.slice(1),
          element: <AdminProfile />,
        },

        {
          path: ENavAdmin.ADMIN_MANAGEMENT.slice(1),

          children: [
            {
              path: '',
              element: <AdminManagement />,
            },
            {
              path: ENavAdmin.ADMIN_LIST.slice(1),
              element: <AdminManagement />,
            },
            {
              path: ENavAdmin.ROLES_LIST.slice(1),
              element: <RoleManagement />,
            },
            {
              path: ENavAdmin.VAT_MANAGEMENT.slice(1),
              element: <HomeAdmin />,
            },
          ],
        },
        {
          path: ENavAdmin.USER_MANAGEMENT.slice(1),
          element: <HomeAdmin />,
          children: [
            {
              path: ENavAdmin.USER_LIST.slice(1),
              element: <HomeAdmin />,
            },
            {
              path: ENavAdmin.BOOKING_LIST.slice(1),
              element: <HomeAdmin />,
            },
          ],
        },
        {
          path: ENavAdmin.DISHES_MANAGEMENT.slice(1),
          element: <HomeAdmin />,
          children: [
            {
              path: ENavAdmin.DISH_LIST.slice(1),
              element: <HomeAdmin />,
            },
            {
              path: ENavAdmin.DISHES_CONNECT.slice(1),
              element: <HomeAdmin />,
            },
          ],
        },
        {
          path: ENavAdmin.NEWS_MANAGEMENT.slice(1),
          element: <HomeAdmin />,
        },
      ],
    },
    {
      path: 'auth',
      children: [
        {
          path: '',
          element: <SignInAdmin />,
        },
        {
          path: 'sign-in',
          element: <SignInAdmin />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to={'auth/sign-in'} />,
    },
  ],
};

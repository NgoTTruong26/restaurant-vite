import { createBrowserRouter } from 'react-router-dom';

import BookingLookup from 'modules/customer/components/bookingLookup';
import Menu from 'modules/customer/components/menu';

import { adminRoute } from 'modules/admin/router';
import AppCustomer from 'modules/customer/AppCustomer';
import News from 'modules/customer/components/news';
import Post from 'modules/customer/components/news/components/posts/components/Post';
import OrderManagement from 'modules/customer/components/user/components/OrderManagement';
import AccountInformation from 'modules/customer/components/user/components/accountInformation';
import { ELinkSideBar } from 'modules/customer/components/user/constant';
import { lazy } from 'react';

//Layout
const HomeLayout = lazy(() => import('Layout/customer'));

//Pages customers
const Home = lazy(() => import('modules/customer/components/home/pages/Home'));

const UserProfile = lazy(() => import('modules/customer/components/user'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppCustomer />,
    children: [
      {
        path: '',
        element: <HomeLayout />,
        children: [
          { path: '', element: <Home /> },
          {
            path: 'bookings-lookup',
            element: <BookingLookup />,
          },
          { path: 'dish-menu', element: <Menu /> },
          {
            path: 'news',
            element: <News />,
          },
          {
            path: 'news/:id',
            element: <Post />,
          },
          {
            path: 'user',
            element: <UserProfile />,
            children: [
              { path: '', element: <AccountInformation /> },
              { path: ELinkSideBar.PROFILE, element: <AccountInformation /> },
              {
                path: ELinkSideBar.NOTIFICATION,
                element: <div>notification</div>,
              },
              {
                path: ELinkSideBar.ORDER_MANAGEMENT,
                element: <OrderManagement />,
              },
            ],
          },
        ],
      },
    ],
  },
  adminRoute,
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
]);

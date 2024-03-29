import { Button, Divider } from '@nextui-org/react';
import clsx from 'clsx';
import useMediaQuery from 'hooks/useMediaQuery';
import { useState } from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { TbLogout } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { signOutAdmin } from 'redux/features/auth-admin/authAdminSlice';
import AdminInfor from './components/AdminInfor';
import Navbar from './components/Navbar';

export default function Sidebar() {
  const [isSidebarMini, setSidebarMini] = useState<boolean>(false);

  const { isSmSmaller, isMdSmaller, isXsSmaller } = useMediaQuery();

  const dispatch = useDispatch();

  const handleSetSidebarMini = () => {
    return setSidebarMini((prevs) => !prevs);
  };

  return (
    <div
      className={clsx(
        "z-50 h-full bg-[url('https://demos.creative-tim.com//light-bootstrap-dashboard-pro-react/static/media/full-screen-image-3.21a228cd.jpg')] bg-cover bg-center bg-no-repeat",
        'fixed left-0 overflow-y-auto overflow-x-hidden',
        {
          '[&~div]:w-[calc(100%-80px)]':
            isSidebarMini || isMdSmaller || isSmSmaller,
          'hidden [&~div]:w-full': isXsSmaller,
        },
      )}
    >
      <div
        className={clsx(
          'relative flex flex-col justify-between w-[300px] text-[#ffffff] transition-all min-h-full ',
          'before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-[#000] before:w-full before:opacity-30',
          {
            '!w-20': isSidebarMini || isMdSmaller || isSmSmaller,
            '[&>div>div>div>div]:before:opacity-0':
              isSidebarMini || isMdSmaller || isSmSmaller,
            'hover:!w-[300px] [&:hover>div>div>div>div]:before:opacity-100':
              isSidebarMini || isMdSmaller || isSmSmaller,
            'admin-dashboard': isSidebarMini || isMdSmaller || isSmSmaller,
          },
        )}
      >
        <div className="relative z-10 max-h-[calc(100% - 80px)] min-h-full pb-20 whitespace-nowrap space-y-2">
          <h1 className="flex justify-center items-center text-base uppercase text-center py-2 border-b border-[#ffffff4d] mx-5 transition-all">
            <MdSpaceDashboard size={40} />
          </h1>
          <AdminInfor
            isSidebarMini={isSidebarMini}
            handleSetSidebarMini={handleSetSidebarMini}
          />
          <Divider className="bg-[#ffffff4d]" />
          <Navbar />
        </div>
        <div className="space-y-2 pb-5 px-4 ">
          <Divider className="bg-[#ffffff4d]" />
          <Button
            color="danger"
            variant="ghost"
            fullWidth
            className="justify-start min-w-0 px-0 border-solid backdrop-blur-2xl"
            onClick={() => dispatch(signOutAdmin())}
          >
            <span className="flex-shrink-0 flex justify-center w-12 uppercase font-medium duration-300">
              <TbLogout size={25} />
            </span>
            <span className="title-admin-dashboard transition-all duration-300 text-lg">
              Sign Out
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

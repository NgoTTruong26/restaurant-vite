import clsx from 'clsx';
import useMediaQuery from 'hooks/useMediaQuery';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';

export default function AdminLayout() {
  const { isXsSmaller } = useMediaQuery();

  return (
    <div className="flex justify-end bg-[#f5f5fa]">
      {!isXsSmaller && <Sidebar />}
      <div
        className={clsx(
          'relative flex justify-center w-[calc(100%-300px)] transition-all  min-h-screen',
          '[&>div]:px-8',
          {
            'w-full': isXsSmaller,
          },
        )}
      >
        <Outlet />
      </div>
    </div>
  );
}

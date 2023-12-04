import clsx from 'clsx';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sideBar } from '../../constant';
import { GetPreviewProfileDTO } from '../accountInformation/dto/get-user.dto';

interface Props {
  user: GetPreviewProfileDTO;
}

const SideBar: React.FC<Props> = ({ user }) => {
  const location = useLocation();

  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
          alt="avatar"
        />
        <div className="flex flex-col">
          <span className="font-semibold">Account of,</span>
          <span className="font-medium text-primary">{`${user?.fullName}`}</span>
        </div>
      </div>

      <ul className="space-y-1">
        {sideBar.map((val, idx) => (
          <li
            key={idx}
            className={clsx(
              'hover:cursor-pointer hover:bg-primary-50 rounded-2xl [&>a]:px-3 [&>a]:py-2 text-primary',
              {
                'text-red border border-primary  bg-primary-100 ':
                  `/user/${val.href}` === location.pathname ||
                  `/user/${val.href}` === `${location.pathname}/profile`,
              },
            )}
          >
            <Link to={val.href} className="flex items-center gap-3">
              <span className="text-primary">{val.icons}</span>
              <span>{val.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideBar;

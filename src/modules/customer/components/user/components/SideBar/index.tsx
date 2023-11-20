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
          <span>Tài Khoản của</span>
          <span className="font-medium">{`${user?.fullName}`}</span>
        </div>
      </div>

      <ul>
        {sideBar.map((val, idx) => (
          <div key={idx}>
            <li
              key={idx}
              className={clsx('hover:cursor-pointer [&>a]:px-3 [&>a]:py-2', {
                'text-red border border-red rounded-2xl bg-[#fee]':
                  `/user/${val.href}` === location.pathname ||
                  `/user/${val.href}` === `${location.pathname}/profile`,
              })}
            >
              <Link to={val.href} className="flex gap-6">
                <span>{val.icons}</span>
                <span>{val.title}</span>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default SideBar;

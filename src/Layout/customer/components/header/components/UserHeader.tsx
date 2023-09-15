import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { LoginDropdown } from 'Layout/interfaces/loginDropdown';
import clsx from 'clsx';
import { IUser } from 'modules/user/interfaces/user.interface';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, Location } from 'react-router-dom';
import { RootState } from 'redux/app/store';
import { setNavbarItemActive } from 'redux/features/set-active/setActiveSlice';

interface Props {
  dispatch: Dispatch<AnyAction>;
  router: Location;
  loginDropdown: LoginDropdown[];
}

const UserHeader: React.FC<Props> = (props: Props) => {
  const user = useSelector((state: RootState) => state.setUser.value as IUser);

  return (
    <div className="dropdown dropdown-hover dropdown-left dropdown-bottom">
      <label tabIndex={0} className="flex m-1">
        <div className="cursor-pointer w-full">
          <FaUserCircle size={35} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className={clsx(
          'bg-[#eee] top-10 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 !right-0',
          '[&>li+li]:mt-1',
        )}
      >
        <li>
          <Link
            to={'/user/profile'}
            className={clsx(
              'flex capitalize focus:bg-[#c7c8ca] hover:text-red',
              {
                'bg-[#c7c8ca]': props.router.pathname === '/user/profile',
              },
            )}
          >
            {`${user.fullName}`}
          </Link>
        </li>

        {props.loginDropdown.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.href}
              onClick={() => props.dispatch(setNavbarItemActive(''))}
              className={clsx(
                'flex capitalize focus:bg-[#c7c8ca] hover:text-red',
                {
                  'bg-[#c7c8ca]': item.href === props.router.pathname,
                },
              )}
            >
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHeader;

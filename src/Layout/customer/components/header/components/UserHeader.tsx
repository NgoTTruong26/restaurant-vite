import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { LoginDropdown } from 'Layout/interfaces/loginDropdown';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { Link, Location } from 'react-router-dom';
import { RootState } from 'redux/app/store';
import { signOut } from 'redux/features/auth/authSlice';
import { setNavbarItemActive } from 'redux/features/set-active/setActiveSlice';

interface Props {
  dispatch: Dispatch<AnyAction>;
  router: Location;
  loginDropdown: LoginDropdown[];
}

const UserHeader: React.FC<Props> = ({
  loginDropdown,
  router,
  dispatch,
}: Props) => {
  const user = useSelector((state: RootState) => state.auth.value);

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name={user?.fullName}
          size="sm"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat" color="primary">
        <DropdownSection showDivider>
          <DropdownItem key="profile" className=" gap-2 p-0">
            <Link
              to="/user/profile"
              onClick={() => dispatch(setNavbarItemActive(''))}
              className="inline-block w-full font-semibold pb-1 text-primary px-2 py-[6px]"
            >
              Hi, {user?.fullName}
            </Link>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection
          showDivider
          classNames={{
            group: 'flex flex-col gap-1',
          }}
        >
          {loginDropdown.map((item, idx) => (
            <DropdownItem
              key={idx}
              className={clsx('flex capitalize p-0', {
                'bg-zinc-300': item.href === router.pathname,
              })}
            >
              <Link
                to={item.href || ''}
                onClick={() => dispatch(setNavbarItemActive(''))}
                className="inline-block w-full px-2 py-[6px]"
              >
                {item.content}
              </Link>
            </DropdownItem>
          ))}
        </DropdownSection>

        <DropdownSection>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={() => dispatch(signOut())}
          >
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserHeader;

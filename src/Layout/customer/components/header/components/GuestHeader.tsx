import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { LoginDropdown } from 'Layout/interfaces/loginDropdown';
import clsx from 'clsx';
import { Link, Location } from 'react-router-dom';

interface Props {
  dispatch: Dispatch<AnyAction>;
  handleOpenSignInModal: (selected: LoginDropdown['key']) => void;
  router: Location;
  loginDropdown: LoginDropdown[];
}

const GuestHeader: React.FC<Props> = (props: Props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" isIconOnly className="rounded-full">
          <Avatar color="primary" showFallback />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        color="primary"
        defaultSelectedKeys={[props.router.pathname]}
      >
        {props.loginDropdown.map((item) => (
          <DropdownItem
            key={item.key}
            className={clsx('hover:text-white hover:bg-primary-300 p-0', {
              'bg-primary text-white': item.href === props.router.pathname,
            })}
          >
            {item.href ? (
              <Link
                to={item.href}
                className={clsx('flex capitalize text-medium px-2 py-[6px]')}
              >
                {item.content}
              </Link>
            ) : (
              <div
                onClick={() => props.handleOpenSignInModal(item.key)}
                className={clsx('flex capitalize text-medium px-2 py-[6px]')}
              >
                {item.content}
              </div>
            )}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default GuestHeader;

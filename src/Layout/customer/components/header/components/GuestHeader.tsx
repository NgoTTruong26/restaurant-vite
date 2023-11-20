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
  router: Location;
  loginDropdown: LoginDropdown[];
}

const GuestHeader: React.FC<Props> = (props: Props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly className="rounded-full">
          <Avatar showFallback classNames={{ icon: 'text-zinc-50' }} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {props.loginDropdown.map((item) => (
          <DropdownItem
            key={item.content}
            className={clsx('hover:!text-red-500', {
              'bg-[#c7c8ca] text-white': item.href === props.router.pathname,
            })}
          >
            <Link
              to={item.href}
              className={clsx('flex capitalize text-medium', {})}
            >
              {item.content}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default GuestHeader;

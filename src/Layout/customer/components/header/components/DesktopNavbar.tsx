import { NavbarItem } from '@nextui-org/react';
import { NavbarWithIcons } from 'Layout/interfaces/navbar';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface Props {
  navbarWithIcons: NavbarWithIcons[];
  navbarItem: string;
  handleClickIntoView: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: NavbarWithIcons,
  ) => void;
}

const DesktopNavbar: React.FC<Props> = ({
  navbarWithIcons,
  navbarItem,
  handleClickIntoView,
}) => {
  return (
    <>
      {navbarWithIcons.map((item, idx) => (
        <NavbarItem key={idx} className="h-full">
          <Link
            key={idx}
            to={`/`}
            onClick={(e) => handleClickIntoView(e, item)}
            className={clsx(
              `relative flex items-center h-full px-[5px] mx-3`,
              'hover:bg-[#ffffff33] hover:rounded-[10px] hover:cursor-pointer hover:before:scale-x-100',
              ' before:absolute before:w-full before:left-0 before:bottom-[8%] before:h-[2px] before:transform before:duration-150 before:bg-red-500 before:scale-x-0',
              {
                'before:scale-x-100': item.id && item.id === navbarItem,
              },
            )}
          >
            <div className="pr-[5px]">{item.icons}</div>
            <div className="flex">{item.content}</div>
          </Link>
        </NavbarItem>
      ))}
    </>
  );
};

export default DesktopNavbar;

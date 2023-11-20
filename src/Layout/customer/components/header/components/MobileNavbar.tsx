import { NavbarMenuItem } from '@nextui-org/react';
import { NavbarWithIcons } from 'Layout/interfaces/navbar';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  navbarWithIcons: NavbarWithIcons[];
  navbarItem: string;
  handleClickIntoView: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: NavbarWithIcons,
  ) => void;
}

const MobileNavbar: React.FC<Props> = ({
  navbarWithIcons,
  navbarItem,
  handleClickIntoView,
}) => {
  const [showNavbarMenu, setShowNavbarMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showNavbarMenu) {
      document.body.classList.add('overflow-hidden', 'touch-pan-y');
      return;
    }
    document.body.classList.remove('overflow-hidden');
  }, [showNavbarMenu]);

  return (
    <>
      {navbarWithIcons.map((item, idx) => (
        <NavbarMenuItem key={idx}>
          <Link
            to={`/`}
            onClick={(e) => {
              setShowNavbarMenu(false);
              handleClickIntoView(e, item);
            }}
            className={clsx(
              'relative flex items-center px-[5px] mx-3 h-14 w-fit',
              'hover:text-primary-300',

              {
                'text-primary': item.id && item.id === navbarItem,
              },
            )}
          >
            <div className="pr-[5px]">{item.icons}</div>
            <div className="flex text-[16px]">{item.content}</div>
          </Link>
        </NavbarMenuItem>
      ))}
    </>
  );
};

export default MobileNavbar;

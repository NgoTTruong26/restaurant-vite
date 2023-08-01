import { NavbarWithIcons } from "Layout/interfaces/navbar";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface Props {
  navbarWithIcons: NavbarWithIcons[];
  navbarItem: string;
  handleClickIntoView: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: NavbarWithIcons
  ) => void;
}

const DesktopNavbar: React.FC<Props> = ({
  navbarWithIcons,
  navbarItem,
  handleClickIntoView,
}) => {
  return (
    <div className="flex flex-1 justify-center max-xl:hidden">
      <div className="flex">
        {navbarWithIcons.map((item, idx) => (
          <Link
            key={idx}
            to={`/`}
            onClick={(e) => handleClickIntoView(e, item)}
            className={clsx(
              `relative flex items-center px-[5px] mx-3`,
              "hover:bg-[#ffffff33] hover:rounded-[10px] hover:cursor-pointer hover:before:scale-x-100",
              " before:absolute before:w-full before:left-0 before:bottom-[8%] before:h-[2px] before:transform before:duration-150 before:bg-red before:scale-x-0",
              {
                "before:scale-x-100": item.id && item.id === navbarItem,
              }
            )}
          >
            <div className="pr-[5px]">{item.icons}</div>
            <div className="flex">{item.content}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavbar;

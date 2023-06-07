import { NavbarWithIcons } from "Layout/interfaces/navbar";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

interface Props {
  navbarWithIcons: NavbarWithIcons[];
  navbarItem: string;
  handleClickIntoView: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: NavbarWithIcons
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
      document.body.classList.add("overflow-hidden", "touch-pan-y");
      return;
    }
    document.body.classList.remove("overflow-hidden");
  }, [showNavbarMenu]);

  return (
    <div className="hidden max-lg:block">
      <div
        className="flex items-center h-full "
        onClick={() => {
          setShowNavbarMenu(true);
        }}
      >
        <HiMenu size={35} />
      </div>
      <div
        className={clsx(
          "invisible fixed w-full h-full left-0 top-0 bg-[#0009] z-10 ",
          { "!visible": showNavbarMenu }
        )}
        onClick={(e) => {
          setShowNavbarMenu(false);
        }}
      >
        <div
          style={{
            transform: "translateX(-100%)",
          }}
          className={clsx(
            " flex flex-col w-[250px] bg-[#eee] px-2 pt-5 h-full transition-all duration-300",
            { "!translate-x-0": showNavbarMenu }
          )}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="font-bold text-[28px] text-[#000000]">
            Restaurant
            <span className="font-bold text-[28px] text-red">.</span>
          </div>
          <div className="w-fit">
            <div className="flex flex-col">
              {navbarWithIcons.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/`}
                  onClick={(e) => {
                    setShowNavbarMenu(false);
                    handleClickIntoView(e, item);
                  }}
                  className={clsx(
                    "relative flex items-center px-[5px] mx-3 h-14 w-fit",
                    "hover:bg-[#ffffff33] hover:rounded-[10px] hover:cursor-pointer",
                    " before:absolute before:w-full before:left-0 before:bottom-[8%] before:h-[2px] before:transform before:duration-150 before:bg-red before:scale-x-0",
                    {
                      "before:scale-x-100": item.id && item.id === navbarItem,
                    }
                  )}
                >
                  <div className="pr-[5px]">{item.icons}</div>
                  <div className="flex text-[16px]">{item.content}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;

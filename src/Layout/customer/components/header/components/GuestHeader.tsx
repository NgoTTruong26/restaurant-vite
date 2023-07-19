import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { loginDropdown } from "Layout/constant";
import { LoginDropdown } from "Layout/interfaces/loginDropdown";
import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Location } from "react-router-dom";

interface Props {
  dispatch: Dispatch<AnyAction>;
  router: Location;
  loginDropdown: LoginDropdown[];
}

const GuestHeader: React.FC<Props> = (props: Props) => {
  return (
    <div className="dropdown dropdown-hover h-full">
      <label tabIndex={0} className="flex items-center h-full">
        <div className="flex">Xem Thêm</div>
        <div className="pl-[5px]">
          <IoIosArrowDown size={25} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="bg-[#eee] top-10 right-0 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
      >
        {loginDropdown.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.href}
              className={clsx(
                "flex capitalize focus:bg-[#c7c8ca] hover:text-red",
                {
                  "mt-1": idx > 0,
                  "bg-[#c7c8ca]": item.href === props.router.pathname,
                }
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

export default GuestHeader;

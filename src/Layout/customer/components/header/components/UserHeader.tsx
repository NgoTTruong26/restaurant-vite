import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { LoginDropdown } from "Layout/interfaces/loginDropdown";
import clsx from "clsx";
import { FaUserCircle } from "react-icons/fa";
import { Link, Location } from "react-router-dom";
import { setNavbarItemActive } from "redux/features/setActive/setActiveSlide";

interface Props {
  dispatch: Dispatch<AnyAction>;
  router: Location;
  loginDropdown: LoginDropdown[];
}

const UserHeader: React.FC<Props> = (props: Props) => {
  return (
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="flex m-1">
        <div className="cursor-pointer w-full">
          <FaUserCircle size={35} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="bg-[#eee] top-10 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
      >
        {props.loginDropdown.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.href}
              onClick={() => props.dispatch(setNavbarItemActive(""))}
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

export default UserHeader;

import { ESideBar, sideBar } from "../../constant";
import clsx from "clsx";
import React from "react";
import { GetPreviewProfileDTO } from "../accountInformation/dto/get-user.dto";

interface Props {
  handleSetUtilities: (val: keyof typeof ESideBar) => void;
  utilities: keyof typeof ESideBar;
  user: GetPreviewProfileDTO;
}

const SideBar: React.FC<Props> = ({ handleSetUtilities, utilities, user }) => {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://lh5.googleusercontent.com/-mydS1cjmPIo/AAAAAAAAAAI/AAAAAAAAAco/ZYCSiYX747o/photo.jpg"
          alt="avatar"
        />
        <div className="flex flex-col">
          <span>Tài Khoản của</span>
          <span className="font-medium">{`${user?.firstName} ${user?.lastName}`}</span>
        </div>
      </div>

      <ul className="[&>li]:px-3 [&>li]:py-2">
        {sideBar.map((val, idx) => (
          <li
            onClick={() => handleSetUtilities(val.id)}
            key={idx}
            className={clsx("hover:cursor-pointer", {
              "text-red border border-red rounded-2xl bg-[#fee]":
                utilities === val.id,
            })}
          >
            <div className="flex gap-6">
              <span>{val.icons}</span>
              <span>{val.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideBar;

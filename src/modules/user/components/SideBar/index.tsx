import { ESideBar, sideBar } from "../../constant";
import clsx from "clsx";
import React from "react";

interface Props {
  handleSetUtilities: (val: keyof typeof ESideBar) => void;
  utilities: keyof typeof ESideBar;
}

const SideBar: React.FC<Props> = ({ handleSetUtilities, utilities }) => {
  return (
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
  );
};

export default SideBar;

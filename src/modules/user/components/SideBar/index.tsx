import { Link } from "react-router-dom";
import { sideBar } from "../../constant";
import clsx from "clsx";

export default function SideBar() {
  return (
    <ul className="[&>li]:px-3 [&>li]:py-2">
      {sideBar.map((val, idx) => (
        <li
          key={idx}
          className={clsx({
            "text-red border border-red rounded-2xl bg-[#fee]": idx === 0,
          })}
        >
          <Link to={val.href} className="flex gap-6">
            <span>{val.icons}</span>
            <span>{val.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

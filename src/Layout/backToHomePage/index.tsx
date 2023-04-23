import Button from "components/Button";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";

export default function LayoutBackToHomePage() {
  return (
    <div className="relative">
      <Outlet />
      <Link
        to={"/"}
        className="absolute z-50 top-[3%] left-[3%] cursor-pointer [&>button>#arrowNarrowLeft]:hover:animate-transfer-left  "
      >
        <Button className="flex items-center btn-outline border-solid btn-info hover:!text-[#fff] py-2 min-h-fit h-full">
          <div id="arrowNarrowLeft" className="!duration-75">
            <HiOutlineArrowNarrowLeft size={25} />
          </div>
          <span className="pl-2 text-[18px] font-medium">Trang Chủ</span>
        </Button>
      </Link>
    </div>
  );
}

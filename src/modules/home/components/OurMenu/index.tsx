import Button from "components/Button";
import Appetizer from "./Appetizer";
import MainDishes from "./MainDishes";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setNavbarItemActive } from "redux/features/setActive/setActiveSlide";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

interface Props {
  slidesPerView: number | null;
}

export default function OurMenu({ slidesPerView }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div id="our_menu" className="flex justify-center py-16 px-5">
      <div className="flex flex-col max-w-[1200px] w-full items-center">
        <div className="capitalize">Our Menu</div>
        <div
          className={clsx(
            "capitalize font-amatic text-[48px] text-center",
            "max-xs:text-[38px]"
          )}
        >
          {"Check Our "}
          <span
            className={clsx("text-[#ce1212] text-[48px]", "max-xs:text-[38px]")}
          >
            Yummy Menu
          </span>
        </div>
        <Appetizer slidesPerView={slidesPerView} />
        <MainDishes slidesPerView={slidesPerView} />
        <Button
          className="btn bg-red hover:bg-[#f43434]"
          onClick={() => {
            navigate("/dish-menu", { preventScrollReset: true });
            dispatch(setNavbarItemActive(""));
          }}
        >
          See more
          <span className="pl-2">
            <IoIosArrowForward />
          </span>
        </Button>
      </div>
    </div>
  );
}

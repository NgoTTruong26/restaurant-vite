import Button from "components/Button";
import Appetizer from "./Appetizer";
import MainDishes from "./MainDishes";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setNavbarItemActive } from "redux/features/setActive/setActiveSlide";
import { useNavigate } from "react-router-dom";

export default function OurMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div id="our_menu" className="flex justify-center py-16">
      <div className="flex flex-col max-w-[1200px] w-full items-center">
        <div className="capitalize">Our Menu</div>
        <div className="capitalize font-amatic text-[48px]">
          {"Check Our "}
          <span className="text-[#ce1212]">Yummy Menu</span>
        </div>
        <Appetizer />
        <MainDishes />
        <Button
          className="btn bg-red hover:bg-[#f43434]"
          onClick={() => {
            navigate("/dish-menu");
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

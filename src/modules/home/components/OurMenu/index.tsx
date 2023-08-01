import Button from "components/Button";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useEffect, useState } from "react";
import DishesListPreview from "./components/DishesListPreview";
import LoadingSetDish from "modules/menu/components/LoadingSetDish";
import useGetListBuffetMenuPreview from "./hooks/useGetListBuffetMenuPreview";
import { NavBarId } from "Layout/constant";
import LoadingDishesList from "./components/LoadingDishesList";

interface Props {
  slidesPerView: number | null;
}

export default function OurMenu({ slidesPerView }: Props) {
  const [buffet, setBuffet] = useState<string>();
  const [setDish, setSetDish] = useState<string>();

  const navigate = useNavigate();

  const { data, status } = useGetListBuffetMenuPreview();

  useEffect(() => {
    if (data) {
      const specialMenu = data.find((menu) => menu.special === true);
      const specialSetDish = specialMenu?.setDishes?.find(
        (menu) => menu.special === true
      );

      setBuffet(specialMenu?.id);
      setSetDish(specialSetDish?.id);
    }
  }, [data]);

  const handleSetBuffet = (argBuffet: string) => {
    if (argBuffet !== buffet) {
      setBuffet(argBuffet);
      if (data) {
        const specialMenu = data.find((menu) => menu.id === argBuffet);
        const specialSetDish = specialMenu?.setDishes?.find(
          (menu) => menu.special === true
        );
        setSetDish(specialSetDish?.id);
      }
    }
  };

  return (
    <div id={NavBarId.OUR_MENU} className="flex justify-center py-16 px-5">
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

        <div className="flex justify-center pb-5 w-full">
          <div className="flex flex-col items-center w-full">
            <div>Menu</div>
            <div
              className={clsx(
                "text-[36px] text-[#ce1212] pb-5 font-medium",
                "max-sm:text-[30px]"
              )}
            >
              Main Dishes
            </div>
            {status === "loading" ? (
              <div>
                <LoadingSetDish />
                <LoadingDishesList slidesPerView={slidesPerView} />
              </div>
            ) : (
              <div
                className={clsx(
                  "tabs bg-red rounded-xl flex-nowrap",
                  "max-xs:flex-col max-xs:w-full max-xs:[&>div]:w-full"
                )}
              >
                {data?.map((buffetMenu, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSetBuffet(buffetMenu.id)}
                    className={clsx(
                      "capitalize tab tab-lg tab-lifted text-[#fff] font-medium border-b-0 transition-none",
                      {
                        "tab-active !text-red": buffetMenu.id === buffet,
                      }
                    )}
                  >
                    <span className="pl-1">Set{buffetMenu.name}K</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {buffet && setDish && (
          <DishesListPreview
            slidesPerView={slidesPerView}
            buffet={buffet}
            setDish={setDish}
          />
        )}
        <Button
          className="btn bg-red hover:bg-[#f43434]"
          onClick={() => {
            navigate("/dish-menu", { preventScrollReset: true });
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

import clsx from "clsx";
import Button from "components/Button";
import { MenuDataMainDishes } from "interfaces/entities/MenuEntity";
import { Icons } from "interfaces/icons";
import { useEffect, useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { ImGlass } from "react-icons/im";
import MenuGrilled from "./components/MenuGrilled";
import MenuHotPot from "./components/MenuHotPot";
import LoadingDish from "./components/LoadingDish";

const data: MenuDataMainDishes[] = [
  {
    name: "set129k",
    buffetHotPot: [
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
    ],
  },
  {
    name: "set219k",
    buffetGrilled: [
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
    ],
    buffetHotPot: [
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
    ],
  },
  {
    name: "set299k",
    buffetGrilled: [
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
    ],
    buffetHotPot: [
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
      {
        srcImg:
          "https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png",
        alt: "Magnam Tiste",
        title: "Magnam Tiste",
      },
    ],
  },
];

const icons: Icons[] = [
  {
    icons: <BiFoodMenu size={14} />,
  },
  {
    icons: <BiFoodMenu size={14} />,
  },
  {
    icons: <BiFoodMenu size={14} />,
  },
  {
    icons: <ImGlass size={14} />,
  },
  {
    icons: <BiFoodMenu size={14} />,
  },
];

enum EBuffet {
  GRILLED = "GRILLED",
  HOT_POT = "HOT POT",
}

export default function Menu() {
  const [course, setCourse] = useState<number>(1);
  const [buffet, setBuffet] = useState<string>(EBuffet.HOT_POT);

  useEffect(() => {
    setBuffet(EBuffet.HOT_POT);
  }, [course]);

  const handleClick = (number: number) => setCourse(number);

  const handleSetBuffet = (buffet: string) => {
    setBuffet(buffet);
  };

  return (
    <div className="flex-1 pb-10">
      <div className="relative flex justify-center bg-[url('http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/01/background-20.jpg')] bg-cover bg-bottom bg-no-repeat ">
        <div className="w-full flex justify-center px-5 pt-[calc(200vh/6)]">
          <div className=" max-w-[1200px] w-full">
            <div className="text-[64px] font-bold">Dish Menu</div>
            <div className="text-[18px] font-medium">
              Our offerings change from season to season. Try them before they
              are all gone.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5 px-5">
        <div className="flex flex-col items-center max-w-[1200px] w-full">
          <div className="flex w-full pb-10">
            <div className="tabs bg-red rounded-xl">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleClick(idx)}
                  className={clsx(
                    "flex items-center uppercase text-[24px] font-sansita h-full tab tab-lg tab-lifted text-[#fff] font-medium border-b-0 transition-none py-2",
                    {
                      "tab-active !text-red": course === idx,
                    }
                  )}
                >
                  <span className="pt-1">{icons[idx].icons}</span>
                  <span className="pl-1">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>Menu</div>

          <div className="w-full">
            {data.map(
              (item, idx) =>
                course === idx && (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className={clsx(
                        "flex leading-loose font-medium text-[28px] text-[#ce121280] ",
                        "[&>div]:px-3 [&>div]:border-b-2 [&>div]:border-b-solid [&>div]:border-[#ce121280]"
                      )}
                    >
                      {item.buffetGrilled && (
                        <div
                          onClick={() => {
                            handleSetBuffet(EBuffet.GRILLED);
                          }}
                          className={clsx("hover:text-red", {
                            "text-red !border-red": EBuffet.GRILLED === buffet,
                          })}
                        >
                          {EBuffet.GRILLED}
                        </div>
                      )}
                      <div
                        onClick={() => {
                          handleSetBuffet(EBuffet.HOT_POT);
                        }}
                        className={clsx("hover:text-red", {
                          "text-red !border-red": EBuffet.HOT_POT === buffet,
                        })}
                      >
                        {EBuffet.HOT_POT}
                      </div>
                    </div>
                    <div className="py-10">
                      {item.buffetGrilled && buffet === EBuffet.GRILLED && (
                        <div className="flex flex-col items-center">
                          <div className="flex flex-wrap">
                            {item.buffetGrilled.map((itemGrilled, idx) => (
                              <MenuGrilled
                                key={idx}
                                itemGrilled={itemGrilled}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      {buffet === EBuffet.HOT_POT && (
                        <div className="flex flex-col items-center">
                          <div className="flex flex-wrap">
                            {item.buffetHotPot.map((itemHotPot, idx) => (
                              <MenuHotPot key={idx} itemHotPot={itemHotPot} />
                            ))}
                          </div>
                        </div>
                      )}
                      <LoadingDish />
                    </div>
                  </div>
                )
            )}
          </div>

          <Button className="btn bg-red hover:bg-[#f43434]" onClick={() => {}}>
            See more
          </Button>
        </div>
      </div>
    </div>
  );
}

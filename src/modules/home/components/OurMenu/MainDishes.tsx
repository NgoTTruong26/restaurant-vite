import clsx from "clsx";
import { MenuDataMainDishes } from "interfaces/entities/MenuEntity";

import { useState } from "react";

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
    ],
  },
];

export default function MainDishes() {
  const [course, setCourse] = useState<number>(1);

  const handleClick = (number: number) => setCourse(number);

  return (
    <div className="flex justify-center pb-5">
      <div className="flex flex-col items-center">
        <div>Menu</div>
        <div className="text-[36px] text-[#ce1212] pb-5 font-medium">
          Main Dishes
        </div>
        <div className="tabs bg-red rounded-xl">
          {data.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className={clsx(
                "capitalize tab tab-lg tab-lifted text-[#fff] font-medium border-b-0 transition-none",
                {
                  "tab-active !text-red": course === idx,
                }
              )}
            >
              {item.name}
            </div>
          ))}
        </div>
        {data.map(
          (item, idx) =>
            course === idx && (
              <div key={idx} className="flex flex-col pt-5">
                {item.buffetGrilled && (
                  <div className="flex flex-col items-center pb-10">
                    <div className="uppercase text-[28px] text-[#ce1212] pb-14 font-medium">
                      Buffet Grilled
                    </div>
                    <div className="flex flex-wrap">
                      {item.buffetGrilled.map((itemGrilled, idx) => (
                        <div
                          key={idx}
                          className="w-[calc(100%/3)] px-14 pb-5 flex flex-col justify-center items-center"
                        >
                          <div className="pb-2">
                            <img
                              src={itemGrilled.srcImg}
                              alt={itemGrilled.alt}
                            />
                          </div>
                          <div className="capitalize font-shantell text-[22px]">
                            {itemGrilled.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-col items-center">
                  <div className="uppercase text-[28px] text-[#ce1212] pb-14 font-medium">
                    Buffet Hot Pot
                  </div>
                  <div className="flex flex-wrap">
                    {item.buffetHotPot.map((buffetHotPot, idx) => (
                      <div
                        key={idx}
                        className="w-[calc(100%/3)] px-14 pb-10 flex flex-col justify-center items-center"
                      >
                        <div className="pb-2">
                          <img
                            src={buffetHotPot.srcImg}
                            alt={buffetHotPot.alt}
                          />
                        </div>
                        <div className="capitalize font-shantell text-[22px]">
                          {buffetHotPot.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

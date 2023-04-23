import clsx from "clsx";
import { MenuDataMainDishes } from "interfaces/entities/MenuEntity";
import { Icons } from "interfaces/icons";
import { useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { ImGlass } from "react-icons/im";

export default function Menu() {
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

  const icons: Icons[] = [
    {
      icons: <BiFoodMenu size={25} />,
    },
    {
      icons: <BiFoodMenu size={25} />,
    },
    {
      icons: <BiFoodMenu size={25} />,
    },
    {
      icons: <ImGlass size={25} />,
    },
    {
      icons: <BiFoodMenu size={25} />,
    },
  ];

  const [course, setCourse] = useState<number>(1);

  const handleClick = (number: number) => setCourse(number);

  return (
    <div className="flex-1">
      <div className="relative flex justify-center h-[calc(200vh/4)] bg-[url('http://cdn.gastrotheme.com/wp/wp-content/uploads/2017/01/background-20.jpg')] bg-cover bg-bottom bg-no-repeat">
        <div className="absolute bottom-[10%] max-w-[1200px] w-full">
          <div className="text-[64px] font-bold">Dish Menu</div>
          <div className="text-[18px] font-medium">
            Our offerings change from season to season. Try them before they are
            all gone.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
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

          {data.map(
            (item, idx) =>
              course === idx && (
                <div key={idx} className="flex flex-col pt-10">
                  {item.buffetGrilled && (
                    <div className="flex flex-col items-center pb-10">
                      <div>Menu</div>
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
                    <div>Menu</div>
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
    </div>
  );
}

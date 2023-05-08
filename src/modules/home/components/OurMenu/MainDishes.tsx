import clsx from "clsx";
import { MenuDataMainDishes } from "interfaces/entities/MenuEntity";

import { useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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

interface Props {
  slidesPerView: number | null;
}

export default function MainDishes({ slidesPerView }: Props) {
  const [course, setCourse] = useState<number>(1);

  const handleClick = (number: number) => setCourse(number);

  return (
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
        <div className="tabs bg-red rounded-xl flex-nowrap">
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
              <div key={idx} className="flex flex-col pt-5 w-full">
                {item.buffetGrilled && (
                  <div className="flex flex-col items-center pb-10 w-full">
                    <div className="uppercase text-[28px] text-[#ce1212] pb-14 font-medium max-sm:text-[24px]">
                      Buffet Grilled
                    </div>
                    <div className="flex w-full">
                      <Swiper
                        slidesPerView={slidesPerView || 3}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper "
                      >
                        {item.buffetGrilled.map((itemGrilled, idx) => (
                          <SwiperSlide key={idx}>
                            <div
                              key={idx}
                              className={clsx(
                                "px-10 pb-5 flex flex-col justify-center items-center",
                                "max-md:w-[90%] max-md:px-4",
                                "max-sm:px-0"
                              )}
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
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                )}
                <div className="flex flex-col items-center w-full">
                  <div className="uppercase text-[28px] text-[#ce1212] pb-14 font-medium max-sm:text-[24px]">
                    Buffet Hot Pot
                  </div>
                  <div className="flex flex-wrap w-full">
                    <Swiper
                      slidesPerView={slidesPerView || 3}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper "
                    >
                      {item.buffetHotPot.map((buffetHotPot, idx) => (
                        <SwiperSlide key={idx}>
                          <div
                            key={idx}
                            className={clsx(
                              "px-10 pb-10 flex flex-col justify-center items-center",
                              "max-md:w-[90%] max-md:px-4",
                              " max-sm:px-0"
                            )}
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
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

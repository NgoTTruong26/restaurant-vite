import clsx from "clsx";
import { Course } from "interfaces/entities/MenuEntity";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  slidesPerView: number | null;
}

export default function Appetizer({ slidesPerView }: Props) {
  const data: Course[] = [
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
  ];

  return (
    <div className="flex flex-col items-center pt-5 pb-10 w-full">
      <div className="capitalize">Menu</div>
      <div
        className={clsx(
          "capitalize font-medium text-[36px] text-red leading-8 pb-20",
          "max-sm:text-[30px]"
        )}
      >
        Appetizer
      </div>
      <div className="flex w-full">
        <Swiper
          slidesPerView={slidesPerView ?? 3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                key={idx}
                className={clsx(
                  "px-10 pb-10 flex flex-col justify-center items-center",
                  "max-md:w-[90%] max-md:px-4",
                  "max-sm:px-0"
                )}
              >
                <div className="pb-2">
                  <img src={item.srcImg} alt={item.alt} />
                </div>
                <div className="capitalize font-shantell text-[22px]">
                  {item.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

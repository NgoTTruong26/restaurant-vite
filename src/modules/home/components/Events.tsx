import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { DealsEntity } from "interfaces/entities/DealsEntity";
import clsx from "clsx";

interface Props {
  slidesPerView: number | null;
}

const data: DealsEntity[] = [
  {
    srcImg:
      "https://bootstrapmade.com/demo/templates/Yummy/assets/img/events-1.jpg",
    alt: "image",
    title: "Private Parties",
    decription:
      "In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.",
  },
  {
    srcImg:
      "https://bootstrapmade.com/demo/templates/Yummy/assets/img/events-2.jpg",
    alt: "image",
    title: "Custom Parties",
    decription:
      "Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.",
  },
  {
    srcImg:
      "https://bootstrapmade.com/demo/templates/Yummy/assets/img/events-3.jpg",
    alt: "image",
    title: "Birthday Parties",
    decription:
      "Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.",
  },
];

export default function Events({ slidesPerView }: Props) {
  return (
    <div
      id="news"
      className="flex flex-col justify-center items-center bg-[#eee] py-16 px-5"
    >
      <div className="uppercase">Events</div>
      <div
        className={clsx(
          "font-amatic text-[48px] text-center",
          "max-xs:text-[38px]"
        )}
      >
        {"Share "}
        <span className={clsx("text-red text-[48px]", "max-xs:text-[38px]")}>
          Your Moments
        </span>
        {" In Our Restaurant"}
      </div>
      <Swiper
        slidesPerView={slidesPerView ?? 3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{ backgroundImage: `url('${item.srcImg}')` }}
              className={clsx(
                "relative w-full bg-cover bg-no-repeat",
                " before:absolute before:bg-[#00000099] before:w-full before:h-full before:left-0"
              )}
            >
              <div className="absolute flex flex-col items-start bottom-[5%] left-[5%] right-[5%] text-[#fff]">
                <div className="border-b-2 border-b-red pb-1 font-bold text-[28px] max-md:text-[22px]">
                  {item.title}
                </div>
                <div className="line-clamp-2 text-left pt-3">
                  {item.decription}
                </div>
              </div>
              <img src={item.srcImg} alt={item.alt} className="invisible" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

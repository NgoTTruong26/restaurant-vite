import clsx from "clsx";
import useGetSetDishPreview from "modules/home/components/OurMenu/hooks/useGetSetDishPreview";
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import DishesListLoading from "./LoadingDishesList";

interface Props {
  slidesPerView: number | null;
  buffet: string;
  setDish: string;
}

const DishesListPreview: React.FC<Props> = ({
  slidesPerView,
  buffet,
  setDish,
}) => {
  const { data, status } = useGetSetDishPreview({ buffet, setDish });

  return (
    <div className="flex justify-center pb-5 w-full">
      {status === "loading" ? (
        <DishesListLoading slidesPerView={slidesPerView} />
      ) : (
        <div className="flex flex-col items-center w-full">
          {data?.map((setDish, idx) => (
            <div key={idx} className="flex flex-col pt-5 w-full">
              <div className="flex flex-col items-center w-full">
                <div className="uppercase text-[28px] text-[#ce1212] pb-4 font-medium max-sm:text-[24px]">
                  {setDish.name}
                </div>
                <div className="flex flex-wrap w-full">
                  <Swiper
                    slidesPerView={slidesPerView || 3}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper [&>.swiper-wrapper>.swiper-slide]:flex"
                  >
                    {setDish?.dishes?.map((dish, idx) => (
                      <SwiperSlide key={idx}>
                        <div
                          key={idx}
                          className={clsx(
                            "px-10 pb-14 flex flex-col justify-center items-center",
                            "max-md:w-[90%] max-md:px-4",
                            " max-sm:px-0"
                          )}
                        >
                          <div className="pb-2">
                            <img src={dish.image} alt={dish.name} />
                          </div>
                          <div className="capitalize font-shantell text-[22px]">
                            {dish.name}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DishesListPreview;

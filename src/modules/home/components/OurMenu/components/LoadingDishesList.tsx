import clsx from "clsx";
import SkeletonLoading from "components/SkeletonLoading";
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  slidesPerView: number | null;
}

const LoadingDishesList: React.FC<Props> = ({ slidesPerView }) => {
  return (
    <div className="flex flex-wrap w-full h-full">
      {Array(3)
        .fill("")
        .map((value, idx) => (
          <div key={idx} className="flex flex-col w-full">
            <div className="flex justify-center ">
              <div className="w-[40vw] h-[3vw] mb-6 max-h-[25px] min-h-[12px] rounded-2xl overflow-hidden">
                <SkeletonLoading />
              </div>
            </div>
            <Swiper
              slidesPerView={slidesPerView || 3}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper w-full [&>.swiper-wrapper>.swiper-slide]:flex"
            >
              {Array(3)
                .fill("")
                .map((value, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      key={idx}
                      className={clsx(
                        "w-full px-14 pb-10 flex flex-col justify-center items-center",
                        " max-md:px-10",
                        " max-sm:w-[70vw] max-sm:px-3 "
                      )}
                    >
                      <div
                        className={clsx(
                          "mb-2 w-full h-[18vw] max-h-[250px] rounded-2xl overflow-hidden",
                          "max-md:h-[30vw]",
                          "max-sm:h-[34vw]"
                        )}
                      >
                        <SkeletonLoading />
                      </div>
                      <div className="capitalize font-shantell text-[22px] h-[1vw] max-h-[16px] min-h-[12px] w-full rounded-2xl overflow-hidden">
                        <SkeletonLoading />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ))}
    </div>
  );
};

export default LoadingDishesList;

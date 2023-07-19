import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import clsx from "clsx";
import useGetListNewsPreview from "./hooks/useGetNewsListPreview";
import LoadingNewsPreview from "./components/LoadingNewsPreview";

interface Props {
  slidesPerView: number | null;
}

export default function NewsPreview({ slidesPerView }: Props) {
  const { data, status } = useGetListNewsPreview();

  return (
    <div
      id="news"
      className="flex flex-col justify-center items-center py-16 px-5"
    >
      <div className="uppercase">News</div>
      <div
        className={clsx(
          "font-amatic text-[48px] text-center",
          "max-xs:text-[38px]"
        )}
      >
        <span className={clsx("text-red text-[48px]", "max-xs:text-[38px]")}>
          The latest offer
        </span>
        {" from the restaurant"}
        <span className={clsx("text-red text-[48px]", "max-xs:text-[38px]")}>
          {" for you"}
        </span>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="flex flex-wrap w-full">
          {status === "loading" ? (
            <LoadingNewsPreview slidesPerView={slidesPerView} />
          ) : (
            <Swiper
              slidesPerView={slidesPerView || 3}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper [&>.swiper-wrapper>.swiper-slide]:flex"
            >
              {data?.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className={clsx("flex h-full")}>
                    <div className="overflow-hidden flex flex-col bg-[#fdfdfd] mx-[20px] w-full hover:cursor-pointer [&>div>img]:hover:scale-105 shadow-lg border-2 rounded-lg">
                      <div
                        className={clsx(
                          "h-[180px] overflow-hidden",
                          "max-lg:h-[16vw]",
                          "max-md:h-[24vw]",
                          "max-sm:h-[38vw]"
                        )}
                      >
                        <img
                          src={item.srcImg}
                          alt={item.content}
                          className="h-full w-full object-cover transition-transform"
                        />
                      </div>

                      <div className="flex-1 px-[16px] pt-[26px] pb-[12px] text-left">
                        <div className="text-[#FF4500] font-medium">
                          {new Date(item.createdAt).toLocaleDateString("en-GB")}
                        </div>
                        <div className="font-bold pt-1 line-clamp-2">
                          {item.title}
                        </div>
                        {item.content && (
                          <div className="pt-2 line-clamp-3">
                            {item.content}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

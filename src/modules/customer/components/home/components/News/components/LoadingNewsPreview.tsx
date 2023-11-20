import clsx from 'clsx';
import SkeletonLoading from 'components/SkeletonLoading';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  slidesPerView: number | null;
}

export default function LoadingNewsPreview({ slidesPerView }: Props) {
  return (
    <div className="flex flex-wrap w-full">
      <Swiper
        slidesPerView={slidesPerView || 3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper [&>.swiper-wrapper>.swiper-slide]:flex"
      >
        {Array(6)
          .fill('')
          .map((value, idx) => (
            <SwiperSlide key={idx}>
              <div key={idx} className={clsx('flex w-full')}>
                <div className="overflow-hidden flex flex-col bg-[#fdfdfd] mx-[20px] w-full shadow-lg border-2 rounded-lg">
                  <div
                    className={clsx(
                      'h-[16vw] max-h-[180px]',
                      'max-lg:h-[16vw]',
                      'max-md:h-[24vw]',
                      'max-sm:h-[38vw]',
                    )}
                  >
                    <SkeletonLoading />
                  </div>

                  <div className="flex-1 px-[16px] pt-[26px] pb-[12px]">
                    <div className="h-2 rounded-full overflow-hidden">
                      <SkeletonLoading />
                    </div>
                    <div className="mt-2 h-4 rounded-full overflow-hidden">
                      <SkeletonLoading />
                    </div>

                    <div className="mt-2 h-2 rounded-full overflow-hidden">
                      <SkeletonLoading />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

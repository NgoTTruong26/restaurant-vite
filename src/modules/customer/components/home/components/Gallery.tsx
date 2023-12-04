import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import clsx from 'clsx';
import { Image } from 'interfaces/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const data: Image[] = [
  {
    srcImg:
      'https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-4.jpg',
    alt: 'image',
  },
  {
    srcImg:
      'https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-6.jpg',
    alt: 'image',
  },
  {
    srcImg:
      'https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-7.jpg',
    alt: 'image',
  },
  {
    srcImg:
      'https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-8.jpg',
    alt: 'image',
  },
  {
    srcImg:
      'https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-3.jpg',
    alt: 'image',
  },
  {
    srcImg:
      'https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-1.jpg',
    alt: 'image',
  },
  {
    srcImg:
      'https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-2.jpg',
    alt: 'image',
  },
];

interface Props {
  slidesPerView: number | null;
}

export default function Gallery({ slidesPerView }: Props) {
  return (
    <div className="flex bg-[#eee] justify-center py-16 px-5">
      <div className="flex flex-col w-full max-w-[1200px] justify-center items-center">
        <div className="uppercase">Gallery</div>
        <div className="font-amatic text-[48px] pb-5 text-center max-xs:text-[38px]">
          {'Check '}{' '}
          <span className="text-primary text-[48px] max-xs:text-[38px]">
            Our Gallery
          </span>
        </div>
        <Swiper
          loop
          autoplay={{ delay: 3000 }}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView ?? 3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className={clsx(
            'mySwiper !py-[40px] [&>.swiper-wrapper>.swiper-slide]:bg-[#fff0]',
            '[&>.swiper-wrapper>.swiper-slide>*]:!rounded-3xl [&>.swiper-wrapper>.swiper-slide-active]:before:absolute ',
            '[&>.swiper-wrapper>.swiper-slide-active]:before:w-full [&>.swiper-wrapper>.swiper-slide-active]:before:h-full ',
            '[&>.swiper-wrapper>.swiper-slide-active]:before:left-0 [&>.swiper-wrapper>.swiper-slide-active]:before:border-8',
            '[&>.swiper-wrapper>.swiper-slide-active]:before:border-primary-500 [&>.swiper-wrapper>.swiper-slide-active]:before:rounded-3xl',
            '[&>.swiper-pagination>.swiper-pagination-bullet]:!bg-primary',
            '[&>.swiper-pagination>.swiper-pagination-bullet-active]:!bg-primary',
            '[&>.swiper-button-prev]:bg-primary [&>.swiper-button-next]:bg-primary',
          )}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img src={item.srcImg} alt={item.alt} className="min-h-[300px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

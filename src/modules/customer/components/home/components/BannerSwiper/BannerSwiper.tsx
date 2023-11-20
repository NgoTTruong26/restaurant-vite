import { Swiper, SwiperSlide } from 'swiper/react';

import clsx from 'clsx';
import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';

export default function Banner() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={clsx(
        'w-[50%] min-h-[530px] py-20',
        'max-sm:w-[90%] max-sm:min-h-[300px]',
        'max-md:w-[80%] max-md:pt-12 max-md:pb-0 max-md:min-h-[400px]',
      )}
    >
      <div className="h-full overflow-hidden border-4 border-primary shadow-xl shadow-[#ce121233] rounded-xl p-[5px] bg-[#fff]">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
          }}
          navigation={visible}
          autoplay={{ delay: 5000 }}
          loop
          modules={[Pagination, Autoplay, Navigation]}
          className={clsx(
            'mySwiper h-full ',
            '[&>.swiper-pagination>.swiper-pagination-bullet]:!bg-primary',
            '[&>.swiper-pagination>.swiper-pagination-bullet-active]:!bg-primary',
            '[&>.swiper-button-prev]:bg-primary [&>.swiper-button-next]:bg-primary',
          )}
        >
          <SwiperSlide>
            <div className="w-full h-full bg-[url('https://chefdzung.com.vn/uploads/images/1.jpg')] bg-cover">
              <img
                src="https://chefdzung.com.vn/uploads/images/1.jpg"
                alt="img"
                className="w-full h-full hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://chefdzung.com.vn/uploads/images/nhahang.png"
              alt="img"
              className="w-full h-full "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://chefdzung.com.vn/uploads/images/slide/hau-slide.jpg"
              alt="img"
              className="w-full h-full "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://chefdzung.com.vn/uploads/images/slide/seafood-1494193-1920.jpg"
              alt="img"
              className="w-full h-full "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://chefdzung.com.vn/uploads/images/slide/seafood-1494194-1920.jpg"
              alt="img"
              className="w-full h-full "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

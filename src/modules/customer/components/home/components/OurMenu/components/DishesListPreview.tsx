import { Card, CardFooter, Image, Tab, Tabs } from '@nextui-org/react';
import useGetSetDishPreview from 'modules/customer/components/home/components/OurMenu/hooks/useGetSetDishPreview';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DishesListLoading from './LoadingDishesList';

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
      {status === 'loading' ? (
        <DishesListLoading slidesPerView={slidesPerView} />
      ) : (
        <div className="flex flex-col items-center w-full">
          <Tabs
            size="lg"
            color="primary"
            variant="underlined"
            aria-label="Tabs variants"
            className="bg-primary-50 rounded-xl h-12 overflow-hidden w-full max-w-[fit-content]"
            classNames={{
              tabContent: 'font-medium',
            }}
          >
            {data?.map((setDish) => (
              <Tab key={setDish.name} title={setDish.name} className="w-full">
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
                        <Card
                          isFooterBlurred
                          radius="lg"
                          shadow="none"
                          className="border-none"
                        >
                          <Image
                            alt={dish.name}
                            className="object-cover"
                            height={280}
                            src={dish.image}
                            width={280}
                          />
                          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-lg font-medium text-red-500">
                              {dish.name}
                            </p>
                          </CardFooter>
                        </Card>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default DishesListPreview;

import clsx from 'clsx';
import SkeletonLoading from 'components/SkeletonLoading';
import React from 'react';

const LoadingDish: React.FC<{ numberOfDishes?: number }> = ({
  numberOfDishes = 6,
}) => {
  return (
    <div className="flex flex-wrap w-full h-full">
      {Array(numberOfDishes)
        .fill('')
        .map((value, idx) => (
          <div
            key={idx}
            className={clsx(
              'w-[calc(100%/3)] px-14 pb-5 flex flex-col justify-center items-center',
              'max-md:w-[calc(100%/2)] max-md:px-10',
              ' max-sm:px-3 ',
            )}
          >
            <div
              className={clsx(
                'mb-2 w-full h-[18vw] max-h-[250px] rounded-2xl overflow-hidden',
                'max-md:h-[30vw]',
                'max-sm:h-[34vw]',
              )}
            >
              <SkeletonLoading />
            </div>
            <div className="capitalize font-shantell text-[22px] h-[1vw] max-h-[16px] min-h-[12px] w-full rounded-2xl overflow-hidden">
              <SkeletonLoading />
            </div>
          </div>
        ))}
    </div>
  );
};

export default LoadingDish;

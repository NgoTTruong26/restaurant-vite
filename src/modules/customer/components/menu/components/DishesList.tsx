import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import useGetDishes from '../hooks/useGetDishes';
import Dish from './Dish';
import LoadingDish from './LoadingDish';

interface Props {
  setDish: string;
  buffet: string;
}

const ListDish: React.FC<Props> = ({ setDish, buffet }) => {
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
    status,
  } = useGetDishes({
    setDish,
    buffet,
  });

  const handleGetDishes = () => {
    fetchNextPage();
  };

  return (
    <div className="py-10 w-full">
      <div className="flex flex-col items-center">
        {status === 'loading' ? (
          <LoadingDish />
        ) : (
          <>
            <div className="flex flex-wrap w-full">
              {data?.pages?.map((page) => {
                return page?.dishes?.map((dish, idx) => (
                  <Dish key={idx} dish={dish} />
                ));
              })}

              {!isFetchingNextPage || <LoadingDish numberOfDishes={4} />}
            </div>
          </>
        )}

        <Button
          className={clsx('btn bg-red hover:bg-[#f43434]')}
          onClick={() => handleGetDishes()}
          isDisabled={!hasNextPage}
        >
          See more
        </Button>
      </div>
    </div>
  );
};

export default ListDish;

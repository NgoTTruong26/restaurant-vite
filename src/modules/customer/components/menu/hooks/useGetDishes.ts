import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { GetDishesListDTO } from '../dto/get-dish.dto';

export interface IPageParam {
  idBuffetMenu?: string;
  idSetDish?: string;
  limit?: number;
  offset?: number;
}

interface Props {
  buffet: string;
  setDish: string;
  limit?: number;
  offset?: number;
}

export default function useGetDishes({
  buffet,
  setDish,
  limit = 4,
  offset = 0,
}: Props) {
  const {
    status,
    data,
    error,
    isFetching,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['get_dishes', buffet, setDish],
    async ({
      pageParam = {
        idBuffetMenu: buffet,
        idSetDish: setDish,
        limit,
        offset,
      },
    }: QueryFunctionContext<string[], IPageParam>) => {
      if (!pageParam) {
        return undefined;
      }

      const res = await api.get<IAxiosResponse<GetDishesListDTO>>(
        `/buffet/dishes?limit=${pageParam.limit}&offset=${pageParam.offset}&buffet_menu_id=${pageParam.idBuffetMenu}&set_dish_id=${pageParam.idSetDish}`,
      );

      return res.data.data;
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.nextPage
          ? {
              idBuffetMenu: lastPage?.idBuffetMenu,
              idSetDish: lastPage?.idSetDish,
              limit,
              offset: lastPage.nextPage,
            }
          : undefined;
      },
    },
  );

  return {
    status,
    data,
    error,
    isLoading,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
}
